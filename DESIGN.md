# Spelling Game Show: Design

A browser-based set of spelling games for a young learner. Everything runs as plain static files: no build step, no server, no dependencies. Open `index.html` in a browser to play.

> **Keep this file current.** When you add a game, change scoring, change the word list format, or fix a known issue, update the matching section here.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app: styles, the five games, tab switching, and the word-list picker. One file, roughly 1,900 lines. |
| `words.js` | Word list data (`WORD_LISTS`) and the `fd()` decoy helper. Loaded by both HTML pages. Edit this to add or change lists; the HTML does not need to change. |
| `meanings.js` | Kid-friendly meanings (`MEANINGS`) for the 987 LMB words that don't have one in `words.js`. Loaded after `words.js` by `index.html`; it fills in `meaning` only where a word has none. Used as Crossword clues. |
| `print.html` | A printable black-and-white "DECODE" worksheet (Code Breaker on paper) for any list, plus a page of cipher keys. |
| `LMB-reference.md` | Where the Lindamood-Bell / Seeing Stars word lists come from and how pages map to lists. |
| `LMB-words-image/` | Photos of the 10 Seeing Stars source pages (Star Words 1–1000). Local only: left out of git by `.gitignore` because they are copyrighted. |

## Code, hosting, and publishing

- **Repo:** https://github.com/jessecollins62/spelling-games (public). This replaced the old Netlify uploads.
- **Live site:** https://jessecollins62.github.io/spelling-games/ (GitHub Pages, served straight from the `main` branch; no build step). The worksheet is at `/print.html`.
- **`main` = what's live.** Anything pushed to `main` goes live within a minute or two.
- **Workflow:** make changes on a local branch (e.g. `dev`), test by opening `index.html` in a browser, then merge into `main` and push to publish.
- `.gitignore` keeps `.DS_Store` and `LMB-words-image/` (copyrighted book photos) out of the repo.

## Word lists (`words.js`)

`WORD_LISTS` is an array of `{ name, words }`. The picker shows lists in array order. On load, the game page starts on the **last list used in this browser**; with none saved, it starts on **LMB 31** (see List picker below).

Each word entry:

```js
{ word: "street",
  decoys: ["streat", "streit"],          // Curtain: two fake misspellings (not real words)
  meaning: "A road in a town ...",       // Blaster and Crossword: kid-friendly meaning that doesn't use the word
  lookalikes: ["stress", "strait", "streak"] }  // Blaster: real words spelled similarly
```

Only `word` and `decoys` are required. `meaning` and `lookalikes` are optional; Blaster skips words without both, and Crossword skips words without a `meaning`.

**Meaning rules** (for `words.js` and `meanings.js`): short and kid-friendly, and never containing the word itself. For little words that are hard to define (`the`, `of`), use a fill-in-the-blank sentence with `___` for the word ("Put ___ dog outside."). Don't start a meaning with a digit, since the Crossword clue list puts the clue number right before it.

### Current lists

1. **Long E list** and **Long A list**: 20 words each, hand-written with decoys, meanings, and lookalikes. These work in all five games.
2. **LMB 1 – LMB 100**: 10 words each, all 1,000 Seeing Stars words in order. `word` plus auto-generated `decoys: fd("...")` in `words.js`, with meanings from `meanings.js` (13 LMB words also appear in the Long lists and use those meanings). They work in every game except Blaster (no lookalikes). See `LMB-reference.md`; the next series would start at LMB 101.

### `fd(word)`: auto decoys

Makes two misspellings for lists without hand-written decoys:

1. Swap vowels (a→e, e→a, i→e, o→u, u→o), up to two times, left to right.
2. If it still needs one, double the first consonant in the middle of the word (`water` → `watter`).
3. If still short, pad with `word + "s"` or `word + "e"`.

These are simple. Sometimes they make a real word (e.g. `I` → `E`, `Is`), and they never use spelling patterns like ee/ea or silent letters the way the hand-written decoys do.

## App structure (`index.html`)

Order in the file:

1. **`<style>`**: all CSS.
2. **Markup**: title, tab bar (`#tabs`), word-list picker (`#listPick`), then one container per game (`#curtainGame`, `#scrambleGame`, `#decodeGame`, `#blasterGame`, `#crosswordGame`). Each game has three panels: start, in-game, and end.
3. **`words.js`** and **`meanings.js`**, then a **shared helpers** script:
   - `$(id)`: shorthand for `getElementById`.
   - `WORDS`: the active list's `words` array. All games read from it.
   - `shuffle(array)`: returns a shuffled copy.
   - `speak(text)` / `canSpeak`: browser text-to-speech (Web Speech API) at rate 0.85.
4. **One script/module per game**. Each is an IIFE (`const curtain = (function () { ... })()`) that keeps its own state and returns `{ stop }`.
5. **Tab switching**: the `GAMES` table maps each game to its tab button, panel, and `stop()`. Switching tabs calls `stop()` on every game you're leaving, which sends it back to its start screen.
6. **List picker**: changing the list sets `WORDS`, saves the list's **name** in `localStorage` (key `spellingGames.list`), and calls `stop()` on every game. On load, the saved name is used if it matches a list; otherwise `DEFAULT_LIST` (`LMB 31`), or the first list if that's missing. Saving by name means adding or reordering lists doesn't change his choice. Storage reads and writes are wrapped in `try`, so a blocked-storage browser just falls back to the default. `print.html` has its own picker and doesn't use the saved list.
7. **Arrow keys**: ↑/↓ move to the previous/next list whenever no round is being played (start and end screens). During a round they do nothing. Each `GAMES` entry's `round` field names its in-round panel, which is how the page tells.

### The game module pattern

Each game follows the same pattern, so a new game should too:

- `newGame()` / `startGame()`: shuffle `WORDS`, reset score, show the in-game panel, show the first word.
- `showWord()` / `startRound()`: set up one word.
- `win()`: add points, wait about 1 second (or advance right away on **Enter**), then go to the next word or `finish()`.
- `finish()` / `endGame()`: show the end panel with score and, where it applies, best score/time and words to practice.
- `stop()`: clear timers, stop the animation loop or speech, and go back to the start panel.
- Then add an entry to `GAMES`, a tab button, and a container with start/game/end panels.

Every game uses the whole active list in random order. Pointer events (`pointerdown`) are used throughout so mouse and touch both work.

**High scores and best times live only in memory.** They reset when the page reloads (nothing is saved to `localStorage`).

## The games

### 🎭 Curtain Game: pick the right spelling

- The word is spoken aloud. Three curtains appear: the correct spelling plus the two `decoys`, in random order.
- Tapping a curtain opens it. Wrong: a cow 🐮 "Oops!" and try again. Right: a trophy and points.
- Scoring: **1000 / 500 / 250** for a right answer on the 1st / 2nd / 3rd try.
- A first-try answer also shows a random cute animal scene (`SCENES`).
- Moves on 1.5 seconds after a right answer.
- End screen: score out of the maximum, session high score, and "Words to practice" (any word not right on the first try).
- If the browser can't speak, the word is shown as text instead ("Spell: ...").

### 🔤 Word Scramble: unscramble the letters

- The word is spoken. Its letters appear shuffled in a tray (always actually scrambled). The player moves them into a row of empty slots.
- Ways to move letters:
  - **Drag** a tile to a slot. Dropping on a filled slot swaps the two letters (within `SWAP_RADIUS` = 50px).
  - **Tap** a tile to send it to the next empty slot.
  - **Type** letters on the keyboard; **Backspace/Delete** returns the last placed letter.
- When every slot is filled, it checks the answer. Wrong shakes the row; right scores **1000**.
- A timer runs for the whole game. The end screen shows total time and the session best time.
- Buttons: 🔊 Hear the word, 🔄 Reset (starts the game over).
- Words are lowercased, so capitalized words like "Easter" work.

### 🔐 Code Breaker: decode a secret word

- The start screen has a row of code buttons (`#dcCodes`): **🎲 Mix of all codes** (the default) or one single code. In Mix, each word gets a random cipher. With a single code, every word uses that one. The buttons are built from the `CIPHERS` table, so a new cipher gets a button automatically. The choice (`code`) is kept across restarts, tab switches, and list changes, and resets on reload.
- The ciphers:
  - **Morse code**: dots and dashes.
  - **Pigpen cipher**: grid and X shapes, with dots for the second half (SVG).
  - **Phone cipher**: keypad digit plus an arrow for which letter on that key (↙ ↓ ↘ ⇓ = 1st–4th).
  - **Atbash**: the reversed alphabet (a↔z, b↔y, ...).
  - **Greek Square code** (a standard Polybius square): each letter is shown as two numbers, row then column, like `1-1` for A, `2-2` for G, `5-5` for Z. The square is 5×5 with rows A–E, F–K, L–P, Q–U, V–Z. **I and J share 2-4**, so a J word still needs J typed; that's part of the spelling. The key is the square as a ruled grid with column numbers across the top and row numbers down the side, and the shared square labeled `i/j` (`SQUARE`, `greekOf`, `greekKey`; cipher id `greek`).
- A key for the current cipher is shown below the puzzle.
- The player **types** letters into the answer boxes. Backspace removes the last letter; tapping a box clears it.
- Anything that isn't a letter a–z (the apostrophe in `don't`, `I'll`, ...) is **filled in already**: it shows in its place with no code symbol and no box. It is skipped when typing, and Backspace and tapping can't remove it (the `given` array).
- Full and correct scores **1000**; wrong shakes and lets them fix it.
- No speech in this game; the point is to decode.
- Ciphers are defined in the `CIPHERS` table (`name`, `symbol(ch)`, `key()`). **The same cipher code is copied into `print.html`**, so a change to one should be made in both.

### ☄️ Blaster: shoot the word that matches the meaning

- Shows a word's `meaning` (with a 🔊 button to read it aloud). Up to four asteroids fall slowly, labeled with the correct word and up to three `lookalikes`.
- The player shoots the right asteroid:
  - **Mouse/touch**: the ship follows the pointer; click/tap fires toward that spot.
  - **Keyboard**: ← → move, **Space** fires straight up, **Enter** skips the wait after a hit.
- Wrong asteroid flashes red ("Not this one!"); right one blows up all asteroids and scores.
- Scoring: **1000 / 500 / 250** by shot number, like Curtain. End screen shows the high score and words to practice.
- Asteroids that fall off the bottom come back from the top.
- Drawn on a 900×520 `<canvas>` with a `requestAnimationFrame` loop (`update` + `draw`).
- Only uses words that have both `meaning` and `lookalikes`. If the list has none, the start screen says so and the game won't start.

### ✏️ Crossword: a puzzle built from the list

- Each Start (or 🔄 New puzzle) builds a new crossword from the list's words. The clues are their `meaning`s. Words need at least two letters, so `I` and `a` are left out. Apostrophes are left out of the grid (`don't` → `dont`), and those clues end with "(no apostrophe)".
- **Moving around:**
  - **Click/tap a square** to pick the word going through it. A square used by two words keeps the current direction; clicking the same square again switches to the other word. Clicking a clue in the list picks that word.
  - **→ / ←** go to the next / previous clue: all Across clues in number order, then all Down clues in number order, then back around to the first Across. (↑/↓ do nothing during a puzzle.)
  - **Type** letters to fill the current word; the cursor moves forward and skips squares already solved. **Backspace/Delete** clears the current square, or the one before it.
- When all of a word's squares are filled, it's checked. Right: it turns green, locks, and scores. Then the game moves to the next unsolved clue. Wrong: it flashes red and counts a try. A crossing word that becomes right because of locked letters is credited without a try being counted.
- Scoring: **1000 / 500 / 250** by wrong tries before getting the word. End screen: score out of the maximum, and "Words to practice" (any word that had a wrong try).
- The clue bar shows the current clue, with **🔊 Clue** (reads it aloud, saying "blank" for `___`) and **🔊 Word** (says the answer word).
- **How the puzzle is built** (`build`, `layout`, `fits`, `spots`):
  - Words are placed one at a time, each crossing a word already in the grid. A new letter may not touch a parallel word (`fits`), so every run of letters in the grid is exactly one word.
  - Each try **starts from a random word in the list**, then goes longest-first with some shuffling. 300 tries (`ATTEMPTS`) are made, half of them choosing spots more randomly, and the best is kept: fewest separate groups, then fewest bonus words, then the smallest grid.
  - **Bonus words:** if some words can't cross anything (common with very short words like `of` and `up`), 80 more tries (`BONUS_ATTEMPTS`) may add bonus words from other lists. Candidates come from the same series first (LMB with LMB), nearest **earlier** lists first, then later ones, then other series. Only meanings-having, letters-only words of 3–6 letters are used. The 60 nearest candidates (`BONUS_LOOK`) are compared, and the one that frees up the most stuck words is used. Bonus clues end with "(bonus word)" and score like any other word.
  - If even that fails, a word starts a separate small group one empty row or column away. In testing, every list connected into one puzzle; about 13 of 102 lists use bonus words, and the 2–3 letter lists (LMB 1–4) need several.
  - Building takes about 20 ms per puzzle.
- Squares are 28–46 px depending on puzzle size; the clue lists sit beside the grid on wide screens and below it on narrow ones.

## Printable worksheet (`print.html`)

- Title "DECODE". Pick a list, then **Shuffle again** or **Print**.
- Every word on the list gets a row of cipher symbols with blank lines to write under. Ciphers are spread about evenly across the words.
- Apostrophes (any non-letter) are printed in place instead of encoded, matching the game.
- Page 2 ("KEYS") shows the key for each cipher used.
- Black and white only: colored fills become outlines, and Morse is drawn as SVG so it prints even when browsers skip background colors.
- On the KEYS page, the phone keypad and Greek square sit side by side so all five keys fit on one page.
- The layout is two columns of ten rows, designed for 20-word lists. LMB lists (10 words) fill one column.

## Known issues and limits

- **Word Scramble with apostrophes**: 14 LMB words have one (`don't`, `I'll`, ...). The `'` tile can be dragged or tapped, but not typed. (Code Breaker and the worksheet fill it in for you; Scramble could do the same.)
- **High scores reset on reload** (in memory only).
- **`fd()` decoys are weak** for very short words and sometimes make real words.
- **Blaster doesn't work with LMB lists** (they have meanings now, but no lookalikes).
- **Typing needs a keyboard** in Code Breaker and Crossword. On an iPad or phone without a keyboard there's no on-screen letter pad yet.
- **Cipher code is duplicated** between `index.html` and `print.html`.

## Adding a word list

1. Add a `{ name, words: [...] }` entry to `WORD_LISTS` in `words.js`. To make it the default for browsers with nothing saved, change `DEFAULT_LIST` in `index.html`.
2. For all five games, give each word `decoys`, `meaning`, and `lookalikes`. For a quick list, use `decoys: fd("word")` and put meanings in `meanings.js` (Crossword then works; Blaster won't be available without lookalikes).
3. Reload `index.html`; the new list appears in the picker.
