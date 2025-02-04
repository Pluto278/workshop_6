# workshop_6

link:https://pluto278.github.io/workshop_6

# Tasks

- Use the RiTa.js library to create an interactive nonsense poetry generator.
- Use at least three different RiTa.js functions to process user input:
  - `RiTa.tokenize()`: Tokenize the input text into words.
  - `RiTa.rhymes()`: Find words that rhyme with the first word of the input.
  - `RiTa.syllables()`: Count the number of syllables in the input.
- Create an interactive interface where users can input text and generate a poem.
- Display the generated poem on the canvas.

# Notes

## 1. Using RiTa.js Functions

I asked gpt how to use RiTa.js.
The following RiTa.js functions are used in this project:

1. **`RiTa.tokenize()`**:
   - Tokenizes the user input into individual words.
   - Example:
     ```javascript
     let words = RiTa.tokenize(userInput);
     ```

2. **`RiTa.rhymes()`**:
   - Finds words that rhyme with the first word of the user input.
   - Example:
     ```javascript
     let rhymes = RiTa.rhymes(words[0]);
     ```

3. **`RiTa.syllables()`**:
   - Counts the number of syllables in the user input.
   - Example:
     ```javascript
     let syllables = RiTa.syllables(userInput);
     ```

## 2. Generating the Poem

The generated poem is created by combining the results of the RiTa.js functions. In this example, the poem consists of a list of words that rhyme with the first word of the user input.

```javascript
let poem = '';
poem += rhymes.join(', ');
outputText.html(poem);
```
