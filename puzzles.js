// Puzzles for the Escape Room game. Keyed by the word in lowercase, so a word gets its puzzle on any list.
// Words with no riddle or picture use their meaning instead (from words.js or meanings.js).
//
// RIDDLES: a short riddle or finish-the-sentence that never uses the word itself. ___ marks a blank.
// PICTURES: emoji with one clear answer. Skip words whose emoji could be read as a different word
// of the same length (globe/earth, happy/smile), since the answer boxes show the length.

const RIDDLES = {
  // Long E
  become: "A caterpillar will one day ___ a butterfly. What word fills the blank?",
  behind: "I'm not in front of you. I'm at your back! Where am I?",
  wheel: "I'm round and I roll. A bike has two of me, and a car has four. What am I?",
  greet: "When a friend comes to the door, you smile and say hello. What are you doing?",
  greed: "Wanting ALL the cookies and not sharing even one. What is that called?",
  sweep: "You grab a broom and push the dust into a pile. What are you doing?",
  street: "Cars drive on me, houses sit along my sides, and my name is on a sign. What am I?",
  queen: "I wear a crown, but I'm not a king. Who am I?",
  screen: "I'm flat and I glow. You watch shows and play games on me. What am I?",
  teacher: "I stand at the front of the class and help you learn to read and add. Who am I?",
  stream: "I'm a little river. Fish swim in me, and I splash over the rocks. What am I?",
  easter: "On this spring holiday, a bunny hides colorful eggs. What holiday is it?",
  scream: "On a roller coaster you open your mouth and yell as loud as you can. What do you do?",
  peanut: "I grow under the ground in a shell, and I can be mashed into butter. What am I?",
  squeak: "A mouse makes this tiny sound. So does a door that needs oil!",
  beast: "A big, wild, scary animal. In the fairy tale, Beauty falls in love with one!",
  rear: "The back end of something. You get out of the ___ door of the car.",
  here: "When the teacher calls your name, you raise your hand and say \"___!\" It means \"in this spot.\"",
  these: "\"I want ___ shoes right here, not those ones over there.\"",
  eve: "The night before a holiday, like Christmas ___ or New Year's ___.",

  // Long A
  crave: "When you really, really, REALLY want pizza, you ___ it.",
  trade: "I give you my apple, and you give me your orange. What did we do?",
  scrape: "If you fall on the sidewalk, you might get one of these on your knee.",
  behave: "\"Be good and use your manners!\" Mom wants you to ___.",
  chase: "In tag, you run after your friends to catch them. What are you doing?",
  became: "The tadpole grew legs and ___ a frog.",
  always: "Not sometimes, and not never. Every single time!",
  subway: "I'm a train that zooms through tunnels under a big city. What am I?",
  crayon: "I'm a waxy stick that comes in a box of many colors. You draw with me! What am I?",
  maybe: "Not yes, and not no. It might happen, or it might not!",
  spray: "A squirt bottle makes water come out in a fine mist. What does it do?",
  haystack: "A big pile of dried grass on a farm. It's hard to find a needle in one!",
  sideways: "A crab walks this way: not forward, not backward, but to the side!",
  brain: "I'm inside your head, and I help you think, learn, and remember. What am I?",
  paint: "You dip a brush in me to color a picture or a wall. What am I?",
  plain: "Not fancy at all. No sprinkles, no frosting, just a ___ cookie.",
  trail: "A path through the woods that you hike on. What is it?",
  faith: "Believing in something with all your heart, even when you can't see it.",
  drain: "Bath water swirls down me when the tub empties. What am I?",
  sprain: "You twisted your ankle and now it's puffy and sore. You have a ___.",

  // Long O
  also: "I like dogs. I like cats ___. (It means \"too.\")",
  post: "A fence has a strong wooden one stuck in the ground at each corner. What is it?",
  almost: "You missed the bus by one second! You ___ made it.",
  broke: "The glass fell off the table and ___ into pieces.",
  globe: "I'm a round ball with a map of the whole world on me. Spin me! What am I?",
  shone: "Yesterday, the sun ___ brightly all day long.",
  owner: "This puppy is mine, so I am its ___.",
  lower: "Not higher. The bottom shelf is the ___ one.",
  shadow: "I follow you on sunny days and copy everything you do, but I'm dark and flat. What am I?",
  window: "I'm made of glass, and you look through me to see outside. What am I?",
  elbow: "I'm in the middle of your arm, and I let it bend. What am I?",
  below: "The opposite of above. Fish swim ___ the water.",
  coast: "Where the land meets the ocean. You'll find beaches there!",
  groan: "\"Ugh!\" The sound you make when you have to clean your room.",
  goal: "In soccer, you kick the ball into the net to score one!",
  boast: "\"I'm the best! I'm the fastest!\" Saying this over and over. What are you doing?",
  throat: "Food goes down me after you swallow. When I'm sore, it hurts to talk. What am I?",
  toast: "I'm bread that went into a hot machine and came out brown and crunchy. What am I?",
  coach: "I teach a sports team and blow a whistle at practice. Who am I?",
  float: "A boat does this on the water, and so does a rubber duck. It doesn't sink!",

  // Long U
  used: "A ___ bike isn't new. Someone else rode it first.",
  tune: "A little song you can hum or whistle. What is it?",
  rule: "\"No running in the hallway!\" That's a school ___.",
  flute: "I'm a long, thin, silver instrument. You hold me sideways and blow across me to play.",
  tube: "Toothpaste comes in one. You squeeze it to get the paste out!",
  drew: "Yesterday I took out my crayons and ___ a picture of a dog.",
  threw: "Yesterday, the pitcher ___ the baseball to the batter.",
  chew: "Your teeth do this to food before you swallow. Gum is made for it!",
  screw: "I'm like a nail with twisty ridges. You twist me into wood with a special tool. What am I?",
  raccoon: "I'm a furry animal with a black mask and a striped tail. I dig in trash cans at night!",
  balloon: "Blow me up, tie a knot, and I'll bob around at your birthday party! What am I?",
  school: "You go here to learn, with teachers, desks, and a playground. What is it?",
  loose: "My tooth is wiggly. It's ___ and might fall out soon!",
  choose: "Chocolate or vanilla? You can only pick one. You have to ___!",
  smooth: "A river stone with no bumps at all. When you rub it, it feels ___.",
  proof: "The detective found muddy paw prints. That's ___ the dog ate the cake!",
  glue: "I'm sticky! I hold paper pieces together in art class. What am I?",
  true: "The opposite of false. \"The sky is blue\" is ___.",
  blue: "I'm the color of the sky and the ocean. What color am I?",
  clue: "A detective hunts for me to solve a mystery. Footprints can be one!",
};

const PICTURES = {
  // animals
  dog: "🐶", cat: "🐱", fish: "🐟", bird: "🐦", horse: "🐴", cow: "🐮", bear: "🐻", raccoon: "🦝",
  // people
  baby: "👶", girl: "👧", boy: "👦", man: "👨", woman: "👩", family: "👪",
  king: "🤴", queen: "👸", teacher: "🧑‍🏫", doctor: "🧑‍⚕️", farmer: "🧑‍🌾", scientist: "🧑‍🔬", student: "🧑‍🎓",
  // body
  eye: "👁️", ear: "👂", nose: "👃", mouth: "👄", hand: "✋", foot: "🦶", leg: "🦵", arm: "💪",
  heart: "❤️", bone: "🦴", brain: "🧠",
  // nature and sky
  sun: "☀️", moon: "🌙", star: "⭐", cloud: "☁️", rain: "🌧️", wind: "💨", fire: "🔥", water: "💧", ice: "🧊",
  earth: "🌍", planet: "🪐", ocean: "🌊", mountain: "⛰️", island: "🏝️", desert: "🏜️", forest: "🌲🌲🌲",
  tree: "🌳", plant: "🌱", flower: "🌸", rose: "🌹", rock: "🪨", wood: "🪵",
  // food
  apple: "🍎", egg: "🥚", milk: "🥛", bread: "🍞", corn: "🌽", salt: "🧂", meat: "🍖", peanut: "🥜",
  // getting around
  car: "🚗", boat: "⛵", ship: "🚢", plane: "✈️", train: "🚆", truck: "🚚", subway: "🚇", wheel: "🛞", road: "🛣️",
  // places
  house: "🏠", school: "🏫", church: "⛪", bank: "🏦", store: "🏪", city: "🏙️", camp: "🏕️",
  // things
  book: "📖", map: "🗺️", key: "🔑", bell: "🔔", ball: "⚽", hat: "🎩", shoe: "👟", dress: "👗", clothes: "👕👖",
  chair: "🪑", bed: "🛏️", door: "🚪", window: "🪟", box: "📦", paper: "📄", letter: "✉️", picture: "🖼️",
  paint: "🎨", crayon: "🖍️", balloon: "🎈", ring: "💍", radio: "📻", music: "🎵", money: "💰", dollar: "💵",
  light: "💡", gas: "⛽", chart: "📊", circle: "⭕", triangle: "🔺",
  // doing and feeling
  sleep: "😴", swim: "🏊", walk: "🚶", run: "🏃", climb: "🧗", dance: "💃", laugh: "😂", quiet: "🤫",
  scream: "😱", write: "✍️", hot: "🥵", cold: "🥶",
  // numbers
  one: "1️⃣", two: "2️⃣", three: "3️⃣", four: "4️⃣", five: "5️⃣", six: "6️⃣", seven: "7️⃣", eight: "8️⃣",
  ten: "🔟", hundred: "💯",
  // colors
  red: "🟥", green: "🟩", blue: "🟦", yellow: "🟨", black: "⬛", white: "⬜", brown: "🟫",
};
