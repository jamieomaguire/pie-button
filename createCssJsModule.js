import fs from 'fs';

const moduleTemplate = `export const styles = () => \`{{replace}}\`;`;
const cssString = fs.readFileSync('./src/generated/style.css').toString();
const cssStringNoComments = cssString.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'');

const module = moduleTemplate.replace('{{replace}}', cssStringNoComments);

fs.writeFileSync('./src/generated/style.js', module);