// Weekly spelling lists. Edit this file each week; index.html does not need to change.
// The FIRST list is the one the games start with. Add new weeks at the top.
// Each entry:
//   word        the correct word
//   decoys      two plausible misspellings that are NOT real words (Curtain game)
//   meaning     a short kid-friendly meaning that doesn't use the word itself (Blaster game)
//   lookalikes  two or three REAL words that are spelled similarly but mean something else (Blaster game)
// Generate 2 plausible-looking misspellings for sight word lists
function fd(w) {
  const vm = {a:'e', e:'a', i:'e', o:'u', u:'o'};
  const out = [];
  for (let i = 0; i < w.length && out.length < 2; i++) {
    const c = w[i].toLowerCase(), s = vm[c];
    if (s) {
      const rep = w[i] !== w[i].toLowerCase() ? s.toUpperCase() : s;
      const d = w.slice(0, i) + rep + w.slice(i + 1);
      if (d !== w && !out.includes(d)) out.push(d);
    }
  }
  for (let i = 1; i < w.length - 1 && out.length < 2; i++) {
    const c = w[i];
    if (!"aeiouAEIOU '".includes(c) && /[a-zA-Z]/.test(c)) {
      const d = w.slice(0, i) + c + w.slice(i);
      if (d !== w && !out.includes(d)) { out.push(d); break; }
    }
  }
  while (out.length < 2) out.push(out[0] ? w + 's' : w + 'e');
  return out;
}

const WORD_LISTS = [
  {
    name: "Long E list",
    words: [
      { word: "become", decoys: ["becum", "bekome"],
        meaning: "To start to be something new, like a caterpillar turning into a butterfly.",
        lookalikes: ["income", "welcome", "beacon"] },
      { word: "behind", decoys: ["bihind", "behynd"],
        meaning: "At the back of something, or following after it.",
        lookalikes: ["behold", "beyond", "blind"] },
      { word: "wheel", decoys: ["wheil", "whele"],
        meaning: "A round thing that turns, like on a bike or a car.",
        lookalikes: ["wheat", "whale", "heel"] },
      { word: "greet", decoys: ["greit", "grete"],
        meaning: "To say hello to someone.",
        lookalikes: ["great", "grief", "green"] },
      { word: "greed", decoys: ["greid", "grede"],
        meaning: "Wanting much more than your fair share.",
        lookalikes: ["breed", "creed", "speed"] },
      { word: "sweep", decoys: ["sweap", "swepe"],
        meaning: "To clean the floor with a broom.",
        lookalikes: ["sheep", "steep", "sweet"] },
      { word: "street", decoys: ["streat", "streit"],
        meaning: "A road in a town with houses and shops along it.",
        lookalikes: ["stress", "strait", "streak"] },
      { word: "queen", decoys: ["queyn", "quene"],
        meaning: "A woman who rules a country, or the lady card in a deck.",
        lookalikes: ["queue", "quilt", "quest"] },
      { word: "screen", decoys: ["screan", "screne"],
        meaning: "The flat part of a TV or computer that shows pictures.",
        lookalikes: ["scene", "screw", "screech"] },
      { word: "teacher", decoys: ["teecher", "teachir"],
        meaning: "A person who helps students learn at school.",
        lookalikes: ["preacher", "treasure", "teaser"] },
      { word: "stream", decoys: ["streem", "streme"],
        meaning: "A small, narrow river.",
        lookalikes: ["steam", "strain", "dream"] },
      { word: "Easter", decoys: ["Eester", "Eastir"],
        meaning: "A spring holiday with eggs and bunnies.",
        lookalikes: ["Easier", "Eastern", "Eater"] },
      { word: "scream", decoys: ["screem", "screame"],
        meaning: "To yell out very loudly in fear or excitement.",
        lookalikes: ["cream", "scrap", "scrawl"] },
      { word: "peanut", decoys: ["peenut", "peanit"],
        meaning: "A small nut that grows underground and is used to make a spread for sandwiches.",
        lookalikes: ["peasant", "pecan", "pennant"] },
      { word: "squeak", decoys: ["squeek", "squeack"],
        meaning: "A short, high little sound, like a mouse makes.",
        lookalikes: ["squeal", "squeeze", "speak"] },
      { word: "beast", decoys: ["beest", "beist"],
        meaning: "A big, wild animal.",
        lookalikes: ["feast", "least", "boast"] },
      { word: "rear", decoys: ["reer", "reir"],
        meaning: "The back part of something.",
        lookalikes: ["real", "roar", "rare"] },
      { word: "here", decoys: ["heer", "hier"],
        meaning: "In this place, not over there.",
        lookalikes: ["hear", "hare", "hero"] },
      { word: "these", decoys: ["theese", "thees"],
        meaning: "Points out more than one thing that is close to you.",
        lookalikes: ["those", "theme", "there"] },
      { word: "eve", decoys: ["eeve", "eev"],
        meaning: "The evening before a special day, like Christmas or New Year's.",
        lookalikes: ["even", "ever", "eye"] },
    ],
  },
  {
    name: "Long A list",
    words: [
      { word: "crave", decoys: ["crayv", "craiv"],
        meaning: "To want something very, very much.",
        lookalikes: ["brave", "grave", "crate"] },
      { word: "trade", decoys: ["trayd", "traid"],
        meaning: "To swap one thing for another.",
        lookalikes: ["grade", "trace", "braid"] },
      { word: "scrape", decoys: ["scrayp", "scraip"],
        meaning: "To rub against something rough and scratch it.",
        lookalikes: ["scrap", "shape", "scrub"] },
      { word: "behave", decoys: ["behayv", "beheive"],
        meaning: "To act in a polite, good way.",
        lookalikes: ["behalf", "believe", "beehive"] },
      { word: "chase", decoys: ["chayse", "chaice"],
        meaning: "To run after something to catch it.",
        lookalikes: ["chose", "case", "chair"] },
      { word: "became", decoys: ["becaim", "bekame"],
        meaning: "Started to be something new; grew into.",
        lookalikes: ["because", "beside", "blame"] },
      { word: "always", decoys: ["allways", "alwayz"],
        meaning: "Every single time, without fail.",
        lookalikes: ["almost", "alloys", "airways"] },
      { word: "subway", decoys: ["subwae", "subwaye"],
        meaning: "A train that runs under the ground in a big city.",
        lookalikes: ["highway", "runway", "subtle"] },
      { word: "crayon", decoys: ["craeon", "crayen"],
        meaning: "A waxy colored stick for drawing.",
        lookalikes: ["canyon", "crown", "crazy"] },
      { word: "maybe", decoys: ["maibe", "mayby"],
        meaning: "Perhaps; it might happen, or it might not.",
        lookalikes: ["baby", "mayor", "maple"] },
      { word: "spray", decoys: ["sprae", "sprai"],
        meaning: "To squirt out tiny drops of liquid.",
        lookalikes: ["stray", "sprang", "pray"] },
      { word: "haystack", decoys: ["haistack", "haystak"],
        meaning: "A big pile of dried grass on a farm.",
        lookalikes: ["hammock", "hayloft", "stack"] },
      { word: "sideways", decoys: ["sidewaze", "sidewais"],
        meaning: "Toward the side, like the way a crab walks.",
        lookalikes: ["sidewalk", "hallways", "sideline"] },
      { word: "brain", decoys: ["brane", "brayn"],
        meaning: "The part inside your head that you think with.",
        lookalikes: ["train", "grain", "brawn"] },
      { word: "paint", decoys: ["paynt", "paent"],
        meaning: "Colored liquid you brush onto walls or paper.",
        lookalikes: ["faint", "point", "saint"] },
      { word: "plain", decoys: ["playn", "plaen"],
        meaning: "Simple, with no decoration.",
        lookalikes: ["plane", "plant", "plait"] },
      { word: "trail", decoys: ["trale", "trayl"],
        meaning: "A path through the woods.",
        lookalikes: ["train", "tail", "trial"] },
      { word: "faith", decoys: ["faeth", "fayth"],
        meaning: "Strong trust or belief in someone or something.",
        lookalikes: ["faint", "fifth", "fairy"] },
      { word: "drain", decoys: ["drane", "drayn"],
        meaning: "A hole where water goes down in a sink or tub.",
        lookalikes: ["brain", "grain", "drawn"] },
      { word: "sprain", decoys: ["sprane", "sprayn"],
        meaning: "To hurt your ankle by twisting it the wrong way.",
        lookalikes: ["spray", "sprang", "stain"] },
    ],
  },

  // ── Lindamood-Bell Seeing Stars Word Lists (LMB1–LMB100) ─────────────────
  // Source: Seeing Stars Star Words 1–1000 (Nanci Bell / Gander Publishing)
  // Page 1 → Star Words 1–100
  { name: "LMB 1",   words: [{word:"I",decoys:fd("I")},{word:"a",decoys:fd("a")},{word:"in",decoys:fd("in")},{word:"it",decoys:fd("it")},{word:"is",decoys:fd("is")},{word:"on",decoys:fd("on")},{word:"at",decoys:fd("at")},{word:"as",decoys:fd("as")},{word:"an",decoys:fd("an")},{word:"if",decoys:fd("if")}] },
  { name: "LMB 2",   words: [{word:"up",decoys:fd("up")},{word:"of",decoys:fd("of")},{word:"or",decoys:fd("or")},{word:"all",decoys:fd("all")},{word:"and",decoys:fd("and")},{word:"the",decoys:fd("the")},{word:"to",decoys:fd("to")},{word:"you",decoys:fd("you")},{word:"he",decoys:fd("he")},{word:"be",decoys:fd("be")}] },
  { name: "LMB 3",   words: [{word:"we",decoys:fd("we")},{word:"she",decoys:fd("she")},{word:"by",decoys:fd("by")},{word:"my",decoys:fd("my")},{word:"so",decoys:fd("so")},{word:"go",decoys:fd("go")},{word:"no",decoys:fd("no")},{word:"see",decoys:fd("see")},{word:"way",decoys:fd("way")},{word:"do",decoys:fd("do")}] },
  { name: "LMB 4",   words: [{word:"who",decoys:fd("who")},{word:"day",decoys:fd("day")},{word:"may",decoys:fd("may")},{word:"that",decoys:fd("that")},{word:"was",decoys:fd("was")},{word:"for",decoys:fd("for")},{word:"are",decoys:fd("are")},{word:"with",decoys:fd("with")},{word:"his",decoys:fd("his")},{word:"they",decoys:fd("they")}] },
  { name: "LMB 5",   words: [{word:"this",decoys:fd("this")},{word:"have",decoys:fd("have")},{word:"one",decoys:fd("one")},{word:"had",decoys:fd("had")},{word:"but",decoys:fd("but")},{word:"not",decoys:fd("not")},{word:"what",decoys:fd("what")},{word:"were",decoys:fd("were")},{word:"when",decoys:fd("when")},{word:"your",decoys:fd("your")}] },
  { name: "LMB 6",   words: [{word:"can",decoys:fd("can")},{word:"said",decoys:fd("said")},{word:"use",decoys:fd("use")},{word:"each",decoys:fd("each")},{word:"there",decoys:fd("there")},{word:"their",decoys:fd("their")},{word:"which",decoys:fd("which")},{word:"how",decoys:fd("how")},{word:"will",decoys:fd("will")},{word:"them",decoys:fd("them")}] },
  { name: "LMB 7",   words: [{word:"then",decoys:fd("then")},{word:"these",decoys:fd("these")},{word:"some",decoys:fd("some")},{word:"her",decoys:fd("her")},{word:"make",decoys:fd("make")},{word:"like",decoys:fd("like")},{word:"him",decoys:fd("him")},{word:"time",decoys:fd("time")},{word:"has",decoys:fd("has")},{word:"look",decoys:fd("look")}] },
  { name: "LMB 8",   words: [{word:"two",decoys:fd("two")},{word:"more",decoys:fd("more")},{word:"write",decoys:fd("write")},{word:"than",decoys:fd("than")},{word:"been",decoys:fd("been")},{word:"sit",decoys:fd("sit")},{word:"did",decoys:fd("did")},{word:"now",decoys:fd("now")},{word:"down",decoys:fd("down")},{word:"long",decoys:fd("long")}] },
  { name: "LMB 9",   words: [{word:"get",decoys:fd("get")},{word:"come",decoys:fd("come")},{word:"made",decoys:fd("made")},{word:"from",decoys:fd("from")},{word:"word",decoys:fd("word")},{word:"other",decoys:fd("other")},{word:"about",decoys:fd("about")},{word:"many",decoys:fd("many")},{word:"would",decoys:fd("would")},{word:"could",decoys:fd("could")}] },
  { name: "LMB 10",  words: [{word:"should",decoys:fd("should")},{word:"into",decoys:fd("into")},{word:"number",decoys:fd("number")},{word:"people",decoys:fd("people")},{word:"first",decoys:fd("first")},{word:"water",decoys:fd("water")},{word:"called",decoys:fd("called")},{word:"find",decoys:fd("find")},{word:"part",decoys:fd("part")},{word:"line",decoys:fd("line")}] },

  // Page 2 → Star Words 101–200
  { name: "LMB 11",  words: [{word:"new",decoys:fd("new")},{word:"take",decoys:fd("take")},{word:"live",decoys:fd("live")},{word:"me",decoys:fd("me")},{word:"just",decoys:fd("just")},{word:"name",decoys:fd("name")},{word:"good",decoys:fd("good")},{word:"man",decoys:fd("man")},{word:"say",decoys:fd("say")},{word:"help",decoys:fd("help")}] },
  { name: "LMB 12",  words: [{word:"too",decoys:fd("too")},{word:"much",decoys:fd("much")},{word:"set",decoys:fd("set")},{word:"put",decoys:fd("put")},{word:"big",decoys:fd("big")},{word:"such",decoys:fd("such")},{word:"men",decoys:fd("men")},{word:"us",decoys:fd("us")},{word:"off",decoys:fd("off")},{word:"end",decoys:fd("end")}] },
  { name: "LMB 13",  words: [{word:"well",decoys:fd("well")},{word:"work",decoys:fd("work")},{word:"back",decoys:fd("back")},{word:"give",decoys:fd("give")},{word:"our",decoys:fd("our")},{word:"where",decoys:fd("where")},{word:"most",decoys:fd("most")},{word:"above",decoys:fd("above")},{word:"right",decoys:fd("right")},{word:"old",decoys:fd("old")}] },
  { name: "LMB 14",  words: [{word:"any",decoys:fd("any")},{word:"same",decoys:fd("same")},{word:"tell",decoys:fd("tell")},{word:"boy",decoys:fd("boy")},{word:"came",decoys:fd("came")},{word:"want",decoys:fd("want")},{word:"show",decoys:fd("show")},{word:"three",decoys:fd("three")},{word:"small",decoys:fd("small")},{word:"must",decoys:fd("must")}] },
  { name: "LMB 15",  words: [{word:"does",decoys:fd("does")},{word:"here",decoys:fd("here")},{word:"why",decoys:fd("why")},{word:"went",decoys:fd("went")},{word:"need",decoys:fd("need")},{word:"home",decoys:fd("home")},{word:"try",decoys:fd("try")},{word:"hand",decoys:fd("hand")},{word:"play",decoys:fd("play")},{word:"away",decoys:fd("away")}] },
  { name: "LMB 16",  words: [{word:"air",decoys:fd("air")},{word:"still",decoys:fd("still")},{word:"over",decoys:fd("over")},{word:"only",decoys:fd("only")},{word:"little",decoys:fd("little")},{word:"know",decoys:fd("know")},{word:"place",decoys:fd("place")},{word:"very",decoys:fd("very")},{word:"after",decoys:fd("after")},{word:"think",decoys:fd("think")}] },
  { name: "LMB 17",  words: [{word:"great",decoys:fd("great")},{word:"also",decoys:fd("also")},{word:"large",decoys:fd("large")},{word:"read",decoys:fd("read")},{word:"land",decoys:fd("land")},{word:"move",decoys:fd("move")},{word:"kind",decoys:fd("kind")},{word:"again",decoys:fd("again")},{word:"spell",decoys:fd("spell")},{word:"house",decoys:fd("house")}] },
  { name: "LMB 18",  words: [{word:"point",decoys:fd("point")},{word:"page",decoys:fd("page")},{word:"mother",decoys:fd("mother")},{word:"father",decoys:fd("father")},{word:"sound",decoys:fd("sound")},{word:"year",decoys:fd("year")},{word:"thing",decoys:fd("thing")},{word:"sentence",decoys:fd("sentence")},{word:"through",decoys:fd("through")},{word:"before",decoys:fd("before")}] },
  { name: "LMB 19",  words: [{word:"means",decoys:fd("means")},{word:"following",decoys:fd("following")},{word:"around",decoys:fd("around")},{word:"form",decoys:fd("form")},{word:"another",decoys:fd("another")},{word:"even",decoys:fd("even")},{word:"because",decoys:fd("because")},{word:"turn",decoys:fd("turn")},{word:"ask",decoys:fd("ask")},{word:"different",decoys:fd("different")}] },
  { name: "LMB 20",  words: [{word:"picture",decoys:fd("picture")},{word:"change",decoys:fd("change")},{word:"animal",decoys:fd("animal")},{word:"letter",decoys:fd("letter")},{word:"answer",decoys:fd("answer")},{word:"found",decoys:fd("found")},{word:"study",decoys:fd("study")},{word:"learn",decoys:fd("learn")},{word:"American",decoys:fd("American")},{word:"world",decoys:fd("world")}] },

  // Page 3 → Star Words 201–300
  { name: "LMB 21",  words: [{word:"add",decoys:fd("add")},{word:"food",decoys:fd("food")},{word:"last",decoys:fd("last")},{word:"keep",decoys:fd("keep")},{word:"stop",decoys:fd("stop")},{word:"own",decoys:fd("own")},{word:"city",decoys:fd("city")},{word:"life",decoys:fd("life")},{word:"left",decoys:fd("left")},{word:"don't",decoys:fd("don't")}] },
  { name: "LMB 22",  words: [{word:"saw",decoys:fd("saw")},{word:"light",decoys:fd("light")},{word:"might",decoys:fd("might")},{word:"fight",decoys:fd("fight")},{word:"night",decoys:fd("night")},{word:"open",decoys:fd("open")},{word:"got",decoys:fd("got")},{word:"run",decoys:fd("run")},{word:"side",decoys:fd("side")},{word:"feet",decoys:fd("feet")}] },
  { name: "LMB 23",  words: [{word:"car",decoys:fd("car")},{word:"took",decoys:fd("took")},{word:"book",decoys:fd("book")},{word:"sea",decoys:fd("sea")},{word:"miss",decoys:fd("miss")},{word:"eat",decoys:fd("eat")},{word:"four",decoys:fd("four")},{word:"let",decoys:fd("let")},{word:"cut",decoys:fd("cut")},{word:"girl",decoys:fd("girl")}] },
  { name: "LMB 24",  words: [{word:"far",decoys:fd("far")},{word:"soon",decoys:fd("soon")},{word:"high",decoys:fd("high")},{word:"near",decoys:fd("near")},{word:"between",decoys:fd("between")},{word:"school",decoys:fd("school")},{word:"tree",decoys:fd("tree")},{word:"never",decoys:fd("never")},{word:"start",decoys:fd("start")},{word:"plant",decoys:fd("plant")}] },
  { name: "LMB 25",  words: [{word:"under",decoys:fd("under")},{word:"story",decoys:fd("story")},{word:"few",decoys:fd("few")},{word:"while",decoys:fd("while")},{word:"close",decoys:fd("close")},{word:"seem",decoys:fd("seem")},{word:"next",decoys:fd("next")},{word:"hard",decoys:fd("hard")},{word:"those",decoys:fd("those")},{word:"white",decoys:fd("white")}] },
  { name: "LMB 26",  words: [{word:"state",decoys:fd("state")},{word:"hear",decoys:fd("hear")},{word:"face",decoys:fd("face")},{word:"watch",decoys:fd("watch")},{word:"list",decoys:fd("list")},{word:"song",decoys:fd("song")},{word:"leave",decoys:fd("leave")},{word:"it's",decoys:fd("it's")},{word:"every",decoys:fd("every")},{word:"below",decoys:fd("below")}] },
  { name: "LMB 27",  words: [{word:"country",decoys:fd("country")},{word:"earth",decoys:fd("earth")},{word:"eye",decoys:fd("eye")},{word:"head",decoys:fd("head")},{word:"along",decoys:fd("along")},{word:"something",decoys:fd("something")},{word:"always",decoys:fd("always")},{word:"both",decoys:fd("both")},{word:"paper",decoys:fd("paper")},{word:"often",decoys:fd("often")}] },
  { name: "LMB 28",  words: [{word:"until",decoys:fd("until")},{word:"children",decoys:fd("children")},{word:"mile",decoys:fd("mile")},{word:"began",decoys:fd("began")},{word:"grow",decoys:fd("grow")},{word:"river",decoys:fd("river")},{word:"carry",decoys:fd("carry")},{word:"once",decoys:fd("once")},{word:"later",decoys:fd("later")},{word:"without",decoys:fd("without")}] },
  { name: "LMB 29",  words: [{word:"almost",decoys:fd("almost")},{word:"talk",decoys:fd("talk")},{word:"begin",decoys:fd("begin")},{word:"being",decoys:fd("being")},{word:"thought",decoys:fd("thought")},{word:"example",decoys:fd("example")},{word:"together",decoys:fd("together")},{word:"group",decoys:fd("group")},{word:"important",decoys:fd("important")},{word:"walk",decoys:fd("walk")}] },
  { name: "LMB 30",  words: [{word:"second",decoys:fd("second")},{word:"idea",decoys:fd("idea")},{word:"enough",decoys:fd("enough")},{word:"Indian",decoys:fd("Indian")},{word:"really",decoys:fd("really")},{word:"top",decoys:fd("top")},{word:"sometimes",decoys:fd("sometimes")},{word:"mountain",decoys:fd("mountain")},{word:"young",decoys:fd("young")},{word:"family",decoys:fd("family")}] },

  // Page 4 → Star Words 301–400
  { name: "LMB 31",  words: [{word:"sun",decoys:fd("sun")},{word:"fish",decoys:fd("fish")},{word:"dog",decoys:fd("dog")},{word:"room",decoys:fd("room")},{word:"bird",decoys:fd("bird")},{word:"told",decoys:fd("told")},{word:"red",decoys:fd("red")},{word:"best",decoys:fd("best")},{word:"ship",decoys:fd("ship")},{word:"across",decoys:fd("across")}] },
  { name: "LMB 32",  words: [{word:"low",decoys:fd("low")},{word:"short",decoys:fd("short")},{word:"today",decoys:fd("today")},{word:"order",decoys:fd("order")},{word:"since",decoys:fd("since")},{word:"knew",decoys:fd("knew")},{word:"horse",decoys:fd("horse")},{word:"mark",decoys:fd("mark")},{word:"color",decoys:fd("color")},{word:"body",decoys:fd("body")}] },
  { name: "LMB 33",  words: [{word:"stand",decoys:fd("stand")},{word:"rock",decoys:fd("rock")},{word:"fast",decoys:fd("fast")},{word:"five",decoys:fd("five")},{word:"step",decoys:fd("step")},{word:"map",decoys:fd("map")},{word:"farm",decoys:fd("farm")},{word:"north",decoys:fd("north")},{word:"draw",decoys:fd("draw")},{word:"seen",decoys:fd("seen")}] },
  { name: "LMB 34",  words: [{word:"plan",decoys:fd("plan")},{word:"hold",decoys:fd("hold")},{word:"cold",decoys:fd("cold")},{word:"south",decoys:fd("south")},{word:"cried",decoys:fd("cried")},{word:"sing",decoys:fd("sing")},{word:"fall",decoys:fd("fall")},{word:"king",decoys:fd("king")},{word:"I'll",decoys:fd("I'll")},{word:"town",decoys:fd("town")}] },
  { name: "LMB 35",  words: [{word:"wood",decoys:fd("wood")},{word:"fire",decoys:fd("fire")},{word:"war",decoys:fd("war")},{word:"black",decoys:fd("black")},{word:"music",decoys:fd("music")},{word:"question",decoys:fd("question")},{word:"ever",decoys:fd("ever")},{word:"didn't",decoys:fd("didn't")},{word:"friend",decoys:fd("friend")},{word:"door",decoys:fd("door")}] },
  { name: "LMB 36",  words: [{word:"become",decoys:fd("become")},{word:"busy",decoys:fd("busy")},{word:"better",decoys:fd("better")},{word:"during",decoys:fd("during")},{word:"hour",decoys:fd("hour")},{word:"whole",decoys:fd("whole")},{word:"wave",decoys:fd("wave")},{word:"reach",decoys:fd("reach")},{word:"wind",decoys:fd("wind")},{word:"space",decoys:fd("space")}] },
  { name: "LMB 37",  words: [{word:"himself",decoys:fd("himself")},{word:"morning",decoys:fd("morning")},{word:"pass",decoys:fd("pass")},{word:"true",decoys:fd("true")},{word:"against",decoys:fd("against")},{word:"table",decoys:fd("table")},{word:"pull",decoys:fd("pull")},{word:"voice",decoys:fd("voice")},{word:"ground",decoys:fd("ground")},{word:"upon",decoys:fd("upon")}] },
  { name: "LMB 38",  words: [{word:"area",decoys:fd("area")},{word:"problem",decoys:fd("problem")},{word:"complete",decoys:fd("complete")},{word:"piece",decoys:fd("piece")},{word:"usually",decoys:fd("usually")},{word:"easy",decoys:fd("easy")},{word:"heard",decoys:fd("heard")},{word:"sure",decoys:fd("sure")},{word:"however",decoys:fd("however")},{word:"product",decoys:fd("product")}] },
  { name: "LMB 39",  words: [{word:"happen",decoys:fd("happen")},{word:"remember",decoys:fd("remember")},{word:"listen",decoys:fd("listen")},{word:"early",decoys:fd("early")},{word:"cover",decoys:fd("cover")},{word:"several",decoys:fd("several")},{word:"toward",decoys:fd("toward")},{word:"hundred",decoys:fd("hundred")},{word:"pattern",decoys:fd("pattern")},{word:"numeral",decoys:fd("numeral")}] },
  { name: "LMB 40",  words: [{word:"slowly",decoys:fd("slowly")},{word:"money",decoys:fd("money")},{word:"notice",decoys:fd("notice")},{word:"unit",decoys:fd("unit")},{word:"figure",decoys:fd("figure")},{word:"certain",decoys:fd("certain")},{word:"field",decoys:fd("field")},{word:"travel",decoys:fd("travel")},{word:"measure",decoys:fd("measure")},{word:"please",decoys:fd("please")}] },

  // Page 5 → Star Words 401–500
  { name: "LMB 41",  words: [{word:"ten",decoys:fd("ten")},{word:"fly",decoys:fd("fly")},{word:"dry",decoys:fd("dry")},{word:"ran",decoys:fd("ran")},{word:"gave",decoys:fd("gave")},{word:"box",decoys:fd("box")},{word:"road",decoys:fd("road")},{word:"wait",decoys:fd("wait")},{word:"afternoon",decoys:fd("afternoon")},{word:"became",decoys:fd("became")}] },
  { name: "LMB 42",  words: [{word:"feel",decoys:fd("feel")},{word:"star",decoys:fd("star")},{word:"street",decoys:fd("street")},{word:"rest",decoys:fd("rest")},{word:"boat",decoys:fd("boat")},{word:"game",decoys:fd("game")},{word:"round",decoys:fd("round")},{word:"less",decoys:fd("less")},{word:"class",decoys:fd("class")},{word:"note",decoys:fd("note")}] },
  { name: "LMB 43",  words: [{word:"green",decoys:fd("green")},{word:"week",decoys:fd("week")},{word:"known",decoys:fd("known")},{word:"stay",decoys:fd("stay")},{word:"inside",decoys:fd("inside")},{word:"six",decoys:fd("six")},{word:"am",decoys:fd("am")},{word:"hot",decoys:fd("hot")},{word:"yes",decoys:fd("yes")},{word:"deep",decoys:fd("deep")}] },
  { name: "LMB 44",  words: [{word:"yet",decoys:fd("yet")},{word:"bring",decoys:fd("bring")},{word:"shape",decoys:fd("shape")},{word:"heat",decoys:fd("heat")},{word:"size",decoys:fd("size")},{word:"rule",decoys:fd("rule")},{word:"ball",decoys:fd("ball")},{word:"dark",decoys:fd("dark")},{word:"fine",decoys:fd("fine")},{word:"done",decoys:fd("done")}] },
  { name: "LMB 45",  words: [{word:"English",decoys:fd("English")},{word:"half",decoys:fd("half")},{word:"strong",decoys:fd("strong")},{word:"front",decoys:fd("front")},{word:"fact",decoys:fd("fact")},{word:"shown",decoys:fd("shown")},{word:"finally",decoys:fd("finally")},{word:"correct",decoys:fd("correct")},{word:"quickly",decoys:fd("quickly")},{word:"person",decoys:fd("person")}] },
  { name: "LMB 46",  words: [{word:"glad",decoys:fd("glad")},{word:"ocean",decoys:fd("ocean")},{word:"wheels",decoys:fd("wheels")},{word:"base",decoys:fd("base")},{word:"ago",decoys:fd("ago")},{word:"stood",decoys:fd("stood")},{word:"plane",decoys:fd("plane")},{word:"brought",decoys:fd("brought")},{word:"cannot",decoys:fd("cannot")},{word:"able",decoys:fd("able")}] },
  { name: "LMB 47",  words: [{word:"pair",decoys:fd("pair")},{word:"minute",decoys:fd("minute")},{word:"inch",decoys:fd("inch")},{word:"decide",decoys:fd("decide")},{word:"contain",decoys:fd("contain")},{word:"course",decoys:fd("course")},{word:"surface",decoys:fd("surface")},{word:"built",decoys:fd("built")},{word:"build",decoys:fd("build")},{word:"nothing",decoys:fd("nothing")}] },
  { name: "LMB 48",  words: [{word:"carefully",decoys:fd("carefully")},{word:"island",decoys:fd("island")},{word:"scientist",decoys:fd("scientist")},{word:"machine",decoys:fd("machine")},{word:"system",decoys:fd("system")},{word:"behind",decoys:fd("behind")},{word:"force",decoys:fd("force")},{word:"understand",decoys:fd("understand")},{word:"warm",decoys:fd("warm")},{word:"common",decoys:fd("common")}] },
  { name: "LMB 49",  words: [{word:"explain",decoys:fd("explain")},{word:"though",decoys:fd("though")},{word:"language",decoys:fd("language")},{word:"thousand",decoys:fd("thousand")},{word:"clear",decoys:fd("clear")},{word:"fill",decoys:fd("fill")},{word:"full",decoys:fd("full")},{word:"check",decoys:fd("check")},{word:"among",decoys:fd("among")},{word:"produce",decoys:fd("produce")}] },
  { name: "LMB 50",  words: [{word:"equation",decoys:fd("equation")},{word:"government",decoys:fd("government")},{word:"object",decoys:fd("object")},{word:"season",decoys:fd("season")},{word:"power",decoys:fd("power")},{word:"material",decoys:fd("material")},{word:"special",decoys:fd("special")},{word:"heavy",decoys:fd("heavy")},{word:"circle",decoys:fd("circle")},{word:"include",decoys:fd("include")}] },

  // Page 6 → Star Words 501–600
  { name: "LMB 51",  words: [{word:"can't",decoys:fd("can't")},{word:"bill",decoys:fd("bill")},{word:"felt",decoys:fd("felt")},{word:"test",decoys:fd("test")},{word:"moon",decoys:fd("moon")},{word:"dance",decoys:fd("dance")},{word:"paint",decoys:fd("paint")},{word:"mind",decoys:fd("mind")},{word:"love",decoys:fd("love")},{word:"cause",decoys:fd("cause")}] },
  { name: "LMB 52",  words: [{word:"rain",decoys:fd("rain")},{word:"train",decoys:fd("train")},{word:"blue",decoys:fd("blue")},{word:"wish",decoys:fd("wish")},{word:"drop",decoys:fd("drop")},{word:"out",decoys:fd("out")},{word:"sum",decoys:fd("sum")},{word:"wall",decoys:fd("wall")},{word:"forest",decoys:fd("forest")},{word:"leg",decoys:fd("leg")}] },
  { name: "LMB 53",  words: [{word:"sat",decoys:fd("sat")},{word:"main",decoys:fd("main")},{word:"winter",decoys:fd("winter")},{word:"wide",decoys:fd("wide")},{word:"kept",decoys:fd("kept")},{word:"race",decoys:fd("race")},{word:"store",decoys:fd("store")},{word:"job",decoys:fd("job")},{word:"past",decoys:fd("past")},{word:"wild",decoys:fd("wild")}] },
  { name: "LMB 54",  words: [{word:"gone",decoys:fd("gone")},{word:"sky",decoys:fd("sky")},{word:"glass",decoys:fd("glass")},{word:"happy",decoys:fd("happy")},{word:"edge",decoys:fd("edge")},{word:"west",decoys:fd("west")},{word:"lay",decoys:fd("lay")},{word:"root",decoys:fd("root")},{word:"meet",decoys:fd("meet")},{word:"third",decoys:fd("third")}] },
  { name: "LMB 55",  words: [{word:"month",decoys:fd("month")},{word:"soft",decoys:fd("soft")},{word:"drive",decoys:fd("drive")},{word:"held",decoys:fd("held")},{word:"shall",decoys:fd("shall")},{word:"matter",decoys:fd("matter")},{word:"square",decoys:fd("square")},{word:"perhaps",decoys:fd("perhaps")},{word:"suddenly",decoys:fd("suddenly")},{word:"direction",decoys:fd("direction")}] },
  { name: "LMB 56",  words: [{word:"center",decoys:fd("center")},{word:"farmer",decoys:fd("farmer")},{word:"anything",decoys:fd("anything")},{word:"ready",decoys:fd("ready")},{word:"divide",decoys:fd("divide")},{word:"thank",decoys:fd("thank")},{word:"general",decoys:fd("general")},{word:"subject",decoys:fd("subject")},{word:"return",decoys:fd("return")},{word:"pick",decoys:fd("pick")}] },
  { name: "LMB 57",  words: [{word:"believe",decoys:fd("believe")},{word:"egg",decoys:fd("egg")},{word:"summer",decoys:fd("summer")},{word:"energy",decoys:fd("energy")},{word:"Europe",decoys:fd("Europe")},{word:"member",decoys:fd("member")},{word:"simple",decoys:fd("simple")},{word:"window",decoys:fd("window")},{word:"cell",decoys:fd("cell")},{word:"exercise",decoys:fd("exercise")}] },
  { name: "LMB 58",  words: [{word:"develop",decoys:fd("develop")},{word:"difference",decoys:fd("difference")},{word:"heart",decoys:fd("heart")},{word:"written",decoys:fd("written")},{word:"distance",decoys:fd("distance")},{word:"probably",decoys:fd("probably")},{word:"length",decoys:fd("length")},{word:"interest",decoys:fd("interest")},{word:"arm",decoys:fd("arm")},{word:"brother",decoys:fd("brother")}] },
  { name: "LMB 59",  words: [{word:"beside",decoys:fd("beside")},{word:"reason",decoys:fd("reason")},{word:"present",decoys:fd("present")},{word:"beautiful",decoys:fd("beautiful")},{word:"finish",decoys:fd("finish")},{word:"sign",decoys:fd("sign")},{word:"record",decoys:fd("record")},{word:"discover",decoys:fd("discover")},{word:"million",decoys:fd("million")},{word:"weather",decoys:fd("weather")}] },
  { name: "LMB 60",  words: [{word:"describe",decoys:fd("describe")},{word:"teacher",decoys:fd("teacher")},{word:"instrument",decoys:fd("instrument")},{word:"paragraph",decoys:fd("paragraph")},{word:"raise",decoys:fd("raise")},{word:"whether",decoys:fd("whether")},{word:"flower",decoys:fd("flower")},{word:"clothes",decoys:fd("clothes")},{word:"represent",decoys:fd("represent")},{word:"region",decoys:fd("region")}] },

  // Page 7 → Star Words 601–700
  { name: "LMB 61",  words: [{word:"son",decoys:fd("son")},{word:"ice",decoys:fd("ice")},{word:"sleep",decoys:fd("sleep")},{word:"snow",decoys:fd("snow")},{word:"ride",decoys:fd("ride")},{word:"hill",decoys:fd("hill")},{word:"baby",decoys:fd("baby")},{word:"buy",decoys:fd("buy")},{word:"tall",decoys:fd("tall")},{word:"bed",decoys:fd("bed")}] },
  { name: "LMB 62",  words: [{word:"free",decoys:fd("free")},{word:"case",decoys:fd("case")},{word:"lake",decoys:fd("lake")},{word:"age",decoys:fd("age")},{word:"scale",decoys:fd("scale")},{word:"per",decoys:fd("per")},{word:"lot",decoys:fd("lot")},{word:"act",decoys:fd("act")},{word:"cat",decoys:fd("cat")},{word:"oh",decoys:fd("oh")}] },
  { name: "LMB 63",  words: [{word:"roll",decoys:fd("roll")},{word:"trip",decoys:fd("trip")},{word:"hole",decoys:fd("hole")},{word:"poor",decoys:fd("poor")},{word:"let's",decoys:fd("let's")},{word:"died",decoys:fd("died")},{word:"beat",decoys:fd("beat")},{word:"dress",decoys:fd("dress")},{word:"cross",decoys:fd("cross")},{word:"speak",decoys:fd("speak")}] },
  { name: "LMB 64",  words: [{word:"care",decoys:fd("care")},{word:"floor",decoys:fd("floor")},{word:"push",decoys:fd("push")},{word:"soil",decoys:fd("soil")},{word:"hope",decoys:fd("hope")},{word:"quite",decoys:fd("quite")},{word:"type",decoys:fd("type")},{word:"lead",decoys:fd("lead")},{word:"hair",decoys:fd("hair")},{word:"tiny",decoys:fd("tiny")}] },
  { name: "LMB 65",  words: [{word:"gold",decoys:fd("gold")},{word:"milk",decoys:fd("milk")},{word:"bear",decoys:fd("bear")},{word:"stone",decoys:fd("stone")},{word:"solve",decoys:fd("solve")},{word:"either",decoys:fd("either")},{word:"appear",decoys:fd("appear")},{word:"village",decoys:fd("village")},{word:"factor",decoys:fd("factor")},{word:"jump",decoys:fd("jump")}] },
  { name: "LMB 66",  words: [{word:"result",decoys:fd("result")},{word:"outside",decoys:fd("outside")},{word:"everything",decoys:fd("everything")},{word:"already",decoys:fd("already")},{word:"spring",decoys:fd("spring")},{word:"instead",decoys:fd("instead")},{word:"laugh",decoys:fd("laugh")},{word:"nation",decoys:fd("nation")},{word:"century",decoys:fd("century")},{word:"phrase",decoys:fd("phrase")}] },
  { name: "LMB 67",  words: [{word:"themselves",decoys:fd("themselves")},{word:"bright",decoys:fd("bright")},{word:"everyone",decoys:fd("everyone")},{word:"within",decoys:fd("within")},{word:"pound",decoys:fd("pound")},{word:"broken",decoys:fd("broken")},{word:"moment",decoys:fd("moment")},{word:"quiet",decoys:fd("quiet")},{word:"metal",decoys:fd("metal")},{word:"method",decoys:fd("method")}] },
  { name: "LMB 68",  words: [{word:"section",decoys:fd("section")},{word:"dictionary",decoys:fd("dictionary")},{word:"amount",decoys:fd("amount")},{word:"although",decoys:fd("although")},{word:"possible",decoys:fd("possible")},{word:"temperature",decoys:fd("temperature")},{word:"natural",decoys:fd("natural")},{word:"chair",decoys:fd("chair")},{word:"speed",decoys:fd("speed")},{word:"count",decoys:fd("count")}] },
  { name: "LMB 69",  words: [{word:"someone",decoys:fd("someone")},{word:"smile",decoys:fd("smile")},{word:"kill",decoys:fd("kill")},{word:"middle",decoys:fd("middle")},{word:"wonder",decoys:fd("wonder")},{word:"angle",decoys:fd("angle")},{word:"bottom",decoys:fd("bottom")},{word:"iron",decoys:fd("iron")},{word:"couldn't",decoys:fd("couldn't")},{word:"sight",decoys:fd("sight")}] },
  { name: "LMB 70",  words: [{word:"protect",decoys:fd("protect")},{word:"surprise",decoys:fd("surprise")},{word:"copy",decoys:fd("copy")},{word:"fraction",decoys:fd("fraction")},{word:"French",decoys:fd("French")},{word:"Africa",decoys:fd("Africa")},{word:"melody",decoys:fd("melody")},{word:"exactly",decoys:fd("exactly")},{word:"remain",decoys:fd("remain")},{word:"finger",decoys:fd("finger")}] },

  // Page 8 → Star Words 701–800
  { name: "LMB 71",  words: [{word:"gas",decoys:fd("gas")},{word:"row",decoys:fd("row")},{word:"foot",decoys:fd("foot")},{word:"law",decoys:fd("law")},{word:"ear",decoys:fd("ear")},{word:"cool",decoys:fd("cool")},{word:"lost",decoys:fd("lost")},{word:"bad",decoys:fd("bad")},{word:"least",decoys:fd("least")},{word:"climb",decoys:fd("climb")}] },
  { name: "LMB 72",  words: [{word:"catch",decoys:fd("catch")},{word:"wrote",decoys:fd("wrote")},{word:"shout",decoys:fd("shout")},{word:"else",decoys:fd("else")},{word:"continue",decoys:fd("continue")},{word:"itself",decoys:fd("itself")},{word:"plain",decoys:fd("plain")},{word:"burn",decoys:fd("burn")},{word:"join",decoys:fd("join")},{word:"grass",decoys:fd("grass")}] },
  { name: "LMB 73",  words: [{word:"you're",decoys:fd("you're")},{word:"skin",decoys:fd("skin")},{word:"cent",decoys:fd("cent")},{word:"England",decoys:fd("England")},{word:"design",decoys:fd("design")},{word:"grew",decoys:fd("grew")},{word:"valley",decoys:fd("valley")},{word:"sent",decoys:fd("sent")},{word:"save",decoys:fd("save")},{word:"east",decoys:fd("east")}] },
  { name: "LMB 74",  words: [{word:"key",decoys:fd("key")},{word:"president",decoys:fd("president")},{word:"pay",decoys:fd("pay")},{word:"brown",decoys:fd("brown")},{word:"cloud",decoys:fd("cloud")},{word:"alone",decoys:fd("alone")},{word:"trouble",decoys:fd("trouble")},{word:"wear",decoys:fd("wear")},{word:"experiment",decoys:fd("experiment")},{word:"touch",decoys:fd("touch")}] },
  { name: "LMB 75",  words: [{word:"engine",decoys:fd("engine")},{word:"replace",decoys:fd("replace")},{word:"information",decoys:fd("information")},{word:"bread",decoys:fd("bread")},{word:"express",decoys:fd("express")},{word:"yard",decoys:fd("yard")},{word:"stick",decoys:fd("stick")},{word:"seed",decoys:fd("seed")},{word:"rise",decoys:fd("rise")},{word:"bank",decoys:fd("bank")}] },
  { name: "LMB 76",  words: [{word:"mouth",decoys:fd("mouth")},{word:"equal",decoys:fd("equal")},{word:"bit",decoys:fd("bit")},{word:"report",decoys:fd("report")},{word:"decimal",decoys:fd("decimal")},{word:"party",decoys:fd("party")},{word:"yourself",decoys:fd("yourself")},{word:"coast",decoys:fd("coast")},{word:"control",decoys:fd("control")},{word:"God",decoys:fd("God")}] },
  { name: "LMB 77",  words: [{word:"ring",decoys:fd("ring")},{word:"practice",decoys:fd("practice")},{word:"salt",decoys:fd("salt")},{word:"straight",decoys:fd("straight")},{word:"child",decoys:fd("child")},{word:"woman",decoys:fd("woman")},{word:"visit",decoys:fd("visit")},{word:"clean",decoys:fd("clean")},{word:"statement",decoys:fd("statement")},{word:"suppose",decoys:fd("suppose")}] },
  { name: "LMB 78",  words: [{word:"period",decoys:fd("period")},{word:"wire",decoys:fd("wire")},{word:"whose",decoys:fd("whose")},{word:"chose",decoys:fd("chose")},{word:"garden",decoys:fd("garden")},{word:"strange",decoys:fd("strange")},{word:"caught",decoys:fd("caught")},{word:"fell",decoys:fd("fell")},{word:"receive",decoys:fd("receive")},{word:"team",decoys:fd("team")}] },
  { name: "LMB 79",  words: [{word:"captain",decoys:fd("captain")},{word:"direct",decoys:fd("direct")},{word:"serve",decoys:fd("serve")},{word:"desert",decoys:fd("desert")},{word:"art",decoys:fd("art")},{word:"feeling",decoys:fd("feeling")},{word:"cost",decoys:fd("cost")},{word:"increase",decoys:fd("increase")},{word:"history",decoys:fd("history")},{word:"maybe",decoys:fd("maybe")}] },
  { name: "LMB 80",  words: [{word:"uncle",decoys:fd("uncle")},{word:"lady",decoys:fd("lady")},{word:"human",decoys:fd("human")},{word:"business",decoys:fd("business")},{word:"break",decoys:fd("break")},{word:"hunt",decoys:fd("hunt")},{word:"flow",decoys:fd("flow")},{word:"student",decoys:fd("student")},{word:"separate",decoys:fd("separate")},{word:"single",decoys:fd("single")}] },

  // Page 9 → Star Words 801–900
  { name: "LMB 81",  words: [{word:"crop",decoys:fd("crop")},{word:"hit",decoys:fd("hit")},{word:"sand",decoys:fd("sand")},{word:"cook",decoys:fd("cook")},{word:"tail",decoys:fd("tail")},{word:"fit",decoys:fd("fit")},{word:"supply",decoys:fd("supply")},{word:"doctor",decoys:fd("doctor")},{word:"thus",decoys:fd("thus")},{word:"mine",decoys:fd("mine")}] },
  { name: "LMB 82",  words: [{word:"safe",decoys:fd("safe")},{word:"corner",decoys:fd("corner")},{word:"belong",decoys:fd("belong")},{word:"electric",decoys:fd("electric")},{word:"tone",decoys:fd("tone")},{word:"insect",decoys:fd("insect")},{word:"provide",decoys:fd("provide")},{word:"won't",decoys:fd("won't")},{word:"bone",decoys:fd("bone")},{word:"wasn't",decoys:fd("wasn't")}] },
  { name: "LMB 83",  words: [{word:"board",decoys:fd("board")},{word:"modern",decoys:fd("modern")},{word:"addition",decoys:fd("addition")},{word:"compound",decoys:fd("compound")},{word:"guess",decoys:fd("guess")},{word:"rather",decoys:fd("rather")},{word:"enjoy",decoys:fd("enjoy")},{word:"flat",decoys:fd("flat")},{word:"bell",decoys:fd("bell")},{word:"fun",decoys:fd("fun")}] },
  { name: "LMB 84",  words: [{word:"silent",decoys:fd("silent")},{word:"trade",decoys:fd("trade")},{word:"crowd",decoys:fd("crowd")},{word:"compare",decoys:fd("compare")},{word:"poem",decoys:fd("poem")},{word:"blow",decoys:fd("blow")},{word:"element",decoys:fd("element")},{word:"except",decoys:fd("except")},{word:"seven",decoys:fd("seven")},{word:"expect",decoys:fd("expect")}] },
  { name: "LMB 85",  words: [{word:"interesting",decoys:fd("interesting")},{word:"indicate",decoys:fd("indicate")},{word:"soldier",decoys:fd("soldier")},{word:"sense",decoys:fd("sense")},{word:"famous",decoys:fd("famous")},{word:"wing",decoys:fd("wing")},{word:"string",decoys:fd("string")},{word:"value",decoys:fd("value")},{word:"pole",decoys:fd("pole")},{word:"thick",decoys:fd("thick")}] },
  { name: "LMB 86",  words: [{word:"lie",decoys:fd("lie")},{word:"spot",decoys:fd("spot")},{word:"loud",decoys:fd("loud")},{word:"movement",decoys:fd("movement")},{word:"exciting",decoys:fd("exciting")},{word:"thin",decoys:fd("thin")},{word:"rich",decoys:fd("rich")},{word:"tied",decoys:fd("tied")},{word:"branch",decoys:fd("branch")},{word:"blood",decoys:fd("blood")}] },
  { name: "LMB 87",  words: [{word:"consider",decoys:fd("consider")},{word:"suggest",decoys:fd("suggest")},{word:"fruit",decoys:fd("fruit")},{word:"position",decoys:fd("position")},{word:"enter",decoys:fd("enter")},{word:"send",decoys:fd("send")},{word:"fright",decoys:fd("fright")},{word:"dollar",decoys:fd("dollar")},{word:"stream",decoys:fd("stream")},{word:"eight",decoys:fd("eight")}] },
  { name: "LMB 88",  words: [{word:"major",decoys:fd("major")},{word:"chief",decoys:fd("chief")},{word:"Japanese",decoys:fd("Japanese")},{word:"planet",decoys:fd("planet")},{word:"tube",decoys:fd("tube")},{word:"science",decoys:fd("science")},{word:"lift",decoys:fd("lift")},{word:"hat",decoys:fd("hat")},{word:"rhythm",decoys:fd("rhythm")},{word:"observe",decoys:fd("observe")}] },
  { name: "LMB 89",  words: [{word:"necessary",decoys:fd("necessary")},{word:"weight",decoys:fd("weight")},{word:"meat",decoys:fd("meat")},{word:"swim",decoys:fd("swim")},{word:"park",decoys:fd("park")},{word:"process",decoys:fd("process")},{word:"sell",decoys:fd("sell")},{word:"army",decoys:fd("army")},{word:"block",decoys:fd("block")},{word:"wife",decoys:fd("wife")}] },
  { name: "LMB 90",  words: [{word:"wash",decoys:fd("wash")},{word:"property",decoys:fd("property")},{word:"term",decoys:fd("term")},{word:"cattle",decoys:fd("cattle")},{word:"particular",decoys:fd("particular")},{word:"current",decoys:fd("current")},{word:"spread",decoys:fd("spread")},{word:"shoulder",decoys:fd("shoulder")},{word:"sharp",decoys:fd("sharp")},{word:"industry",decoys:fd("industry")}] },

  // Page 10 → Star Words 901–1000
  { name: "LMB 91",  words: [{word:"radio",decoys:fd("radio")},{word:"isn't",decoys:fd("isn't")},{word:"fair",decoys:fd("fair")},{word:"born",decoys:fd("born")},{word:"chance",decoys:fd("chance")},{word:"company",decoys:fd("company")},{word:"we'll",decoys:fd("we'll")},{word:"settle",decoys:fd("settle")},{word:"yellow",decoys:fd("yellow")},{word:"action",decoys:fd("action")}] },
  { name: "LMB 92",  words: [{word:"print",decoys:fd("print")},{word:"wouldn't",decoys:fd("wouldn't")},{word:"France",decoys:fd("France")},{word:"sister",decoys:fd("sister")},{word:"chart",decoys:fd("chart")},{word:"factories",decoys:fd("factories")},{word:"level",decoys:fd("level")},{word:"ahead",decoys:fd("ahead")},{word:"southern",decoys:fd("southern")},{word:"truck",decoys:fd("truck")}] },
  { name: "LMB 93",  words: [{word:"agreed",decoys:fd("agreed")},{word:"fresh",decoys:fd("fresh")},{word:"triangle",decoys:fd("triangle")},{word:"shop",decoys:fd("shop")},{word:"repeat",decoys:fd("repeat")},{word:"church",decoys:fd("church")},{word:"wrong",decoys:fd("wrong")},{word:"nose",decoys:fd("nose")},{word:"gun",decoys:fd("gun")},{word:"huge",decoys:fd("huge")}] },
  { name: "LMB 94",  words: [{word:"worker",decoys:fd("worker")},{word:"oxygen",decoys:fd("oxygen")},{word:"column",decoys:fd("column")},{word:"prepare",decoys:fd("prepare")},{word:"western",decoys:fd("western")},{word:"plural",decoys:fd("plural")},{word:"opposite",decoys:fd("opposite")},{word:"pretty",decoys:fd("pretty")},{word:"solution",decoys:fd("solution")},{word:"afraid",decoys:fd("afraid")}] },
  { name: "LMB 95",  words: [{word:"shoe",decoys:fd("shoe")},{word:"various",decoys:fd("various")},{word:"sugar",decoys:fd("sugar")},{word:"score",decoys:fd("score")},{word:"win",decoys:fd("win")},{word:"camp",decoys:fd("camp")},{word:"actually",decoys:fd("actually")},{word:"apple",decoys:fd("apple")},{word:"doesn't",decoys:fd("doesn't")},{word:"range",decoys:fd("range")}] },
  { name: "LMB 96",  words: [{word:"office",decoys:fd("office")},{word:"experience",decoys:fd("experience")},{word:"women",decoys:fd("women")},{word:"bought",decoys:fd("bought")},{word:"led",decoys:fd("led")},{word:"steel",decoys:fd("steel")},{word:"deal",decoys:fd("deal")},{word:"dead",decoys:fd("dead")},{word:"death",decoys:fd("death")},{word:"forward",decoys:fd("forward")}] },
  { name: "LMB 97",  words: [{word:"rose",decoys:fd("rose")},{word:"Greek",decoys:fd("Greek")},{word:"march",decoys:fd("march")},{word:"sail",decoys:fd("sail")},{word:"similar",decoys:fd("similar")},{word:"stretch",decoys:fd("stretch")},{word:"allow",decoys:fd("allow")},{word:"British",decoys:fd("British")},{word:"match",decoys:fd("match")},{word:"rope",decoys:fd("rope")}] },
  { name: "LMB 98",  words: [{word:"evening",decoys:fd("evening")},{word:"fear",decoys:fd("fear")},{word:"Washington",decoys:fd("Washington")},{word:"northern",decoys:fd("northern")},{word:"difficult",decoys:fd("difficult")},{word:"total",decoys:fd("total")},{word:"nor",decoys:fd("nor")},{word:"cotton",decoys:fd("cotton")},{word:"create",decoys:fd("create")},{word:"determine",decoys:fd("determine")}] },
  { name: "LMB 99",  words: [{word:"detail",decoys:fd("detail")},{word:"entire",decoys:fd("entire")},{word:"corn",decoys:fd("corn")},{word:"effect",decoys:fd("effect")},{word:"substance",decoys:fd("substance")},{word:"smell",decoys:fd("smell")},{word:"track",decoys:fd("track")},{word:"sir",decoys:fd("sir")},{word:"tool",decoys:fd("tool")},{word:"cow",decoys:fd("cow")}] },
  { name: "LMB 100", words: [{word:"arrive",decoys:fd("arrive")},{word:"seat",decoys:fd("seat")},{word:"underline",decoys:fd("underline")},{word:"condition",decoys:fd("condition")},{word:"locate",decoys:fd("locate")},{word:"division",decoys:fd("division")},{word:"view",decoys:fd("view")},{word:"molecule",decoys:fd("molecule")},{word:"especially",decoys:fd("especially")},{word:"capital",decoys:fd("capital")}] },
];
