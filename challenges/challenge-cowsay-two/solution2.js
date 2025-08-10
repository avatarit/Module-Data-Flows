// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make a command line interface.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 2. Make supplies for our speech bubble
const topLineChar = '_';
const bottomLineChar = '-';

// 3. Make a cow that takes a string
const cow = (saying) => {
  const text = saying.trim() || 'Moooo... say something!';
  const width = text.length;

  const top = ' ' + topLineChar.repeat(width + 2);
  const bottom = ' ' + bottomLineChar.repeat(width + 2);
  const bubble = `${top}\n< ${text} >\n${bottom}`;

  const cowArt = String.raw`
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||`;

  return `${bubble}\n${cowArt}\n`;
};

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)
rl.question('What should the cow say? ', (answer) => {
  console.log(cow(answer));
  rl.close();
});
