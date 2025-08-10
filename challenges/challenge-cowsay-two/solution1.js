// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments
// how will you accept arguments?
const args = process.argv.slice(2);       // everything after: node file.js ...
const input = args.join(' ');             // allow multiple words

// 2. Make supplies for our speech bubble
let topLine = '_';
let bottomLine = '-';
let saying = '';

// 3. Make a cow that takes a string
function cowsay(saying) {
  // how will you make the speech bubble contain the text?
  const text = (saying && saying.trim()) ? saying.trim() : 'Moooo... (give me words!)';

  // Build the bubble width based on text length
  const width = text.length;
  const top = ' ' + topLine.repeat(width + 2);
  const bottom = ' ' + bottomLine.repeat(width + 2);
  const bubble = `${top}\n< ${text} >\n${bottom}`;

  // where will the cow picture go?
  // Right below the bubble.
  // Use String.raw to keep backslashes as-is.
  const cow = String.raw`
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||`;

  // how will you account for the parameter being empty?
  // We set a friendly default message above if it's empty.

  return `${bubble}\n${cow}\n`;
}

//4. Pipe argument into cowsay function and return a cow
// how will you log this to the console?
console.log(cowsay(input));
