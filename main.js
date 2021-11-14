//Arrays for quotes, speaker and book
const quote = [
  "You're a little scary sometimes, you know that? Brilliant ... but scary.",
  "There will be no foolish wand-waving or silly incantations in this class.",
  "Fame is a fickle friend, Harry. Celebrity is as celebrity does. Remember that.",
  "Training for the ballet, Potter?",
  "I want to commit the murder I was imprisoned for.",
  "Don’t let the muggles get you down.",
  "Anyone can speak Troll. All you have to do is point and grunt.",
  "Your devotion is nothing more than cowardice. You would not be here if you had anywhere else to go.",
  "I think I'll just go down and have some pudding and wait for it all to turn up — it always does in the end.",
  "Youth can not know how age thinks and feels. But old men are guilty if they forget what it was to be young.",
  "Once again, you show all the sensitivity of a blunt axe.",
  "There is no need to call me ‘sir,’ Professor.",
  "It is the quality of one’s convictions that determines success, not the number of followers.",
  "I've always wanted to use that spell.",
];
const speaker = [
  "Harry Potter",
  "Ron Weasley",
  "Hermione Granger",
  "Albus Dumbledore",
  "Minerva McGonagall",
  "Severus Snape",
  "Lord Voldemort",
  "Draco Malfoy",
  "Neville Longbottom",
  "Vernon Dursley",
  "Dolores Umbridge",
  "Sibyll Trelawny",
  "Dobby",
];
const book = [
  "Harry Potter and the Philosopher's Stone",
  "Harry Potter and the Chamber of Secrets",
  "Harry Potter and the Prisoner of Azkaban",
  "Harry Potter and the Goblet of Fire",
  "Harry Potter and the Order of the Phoenix",
  "Harry Potter and the Half-Blood Prince",
  "Harry Potter and the Deathly Hallows",
];

const combineQuote = (array1, array2, array3) => {
  let quote = array1[Math.floor(Math.random() * array1.length)];
  let speaker = array2[Math.floor(Math.random() * array2.length)];
  let listener = array2[Math.floor(Math.random() * array2.length)];
  let book = array3[Math.floor(Math.random() * array3.length)];
  console.log(`${quote} -${speaker} to ${listener}, ${book}`);
};

combineQuote(quote, speaker, book);
