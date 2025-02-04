let inputText;
let generateButton;
let outputText;

function setup() {
  createCanvas(800, 600);
  background(220);

  inputText = createInput();
  inputText.position(20, 20);
  inputText.size(200);

  Button = createButton('Generate Poem');
  Button.position(230, 20);
  Button.mousePressed(generatePoem);

  outputText = createElement('p', 'Your poem will appear here.');
  outputText.position(20, 60);
}

function generatePoem() {
  let userInput = inputText.value();
  if (userInput) {
    console.log("User Input:", userInput);

      let words = RiTa.tokenize(userInput);
      console.log("Tokenized Words:", words);

      let rhymes = RiTa.rhymes(words[0]);
      console.log("Rhymes:", rhymes);

      let syllables = RiTa.syllables(userInput);
      console.log("Syllables:", syllables);

      let poem = '';
      poem += rhymes.join(', ')

      outputText.html(poem);
  }
}