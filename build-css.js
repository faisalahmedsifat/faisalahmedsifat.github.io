const fs = require('fs');
const postcss = require('postcss');
const config = require('./postcss.config.js');

const inputFile = 'src/input.css';
const outputFile = 'style.css';

const plugins = Object.keys(config.plugins).map(plugin => {
    const options = config.plugins[plugin];
    return require(plugin)(options);
});

fs.readFile(inputFile, (err, css) => {
  if (err) throw err;

  postcss(plugins)
    .process(css, { from: inputFile, to: outputFile })
    .then(result => {
      fs.writeFile(outputFile, result.css, () => true);
      console.log('Successfully compiled Tailwind CSS!');
    })
    .catch(error => {
      console.error('Error compiling Tailwind CSS:', error);
    });
});