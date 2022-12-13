import fs from 'fs';

const moduleTemplate = `export const styles = () : string => \`{{replace}}\`;`;
const cssString = fs.readFileSync('./src/generated/css/style.css').toString();
const cssStringNoComments = cssString.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'');

const module = moduleTemplate.replace('{{replace}}', cssStringNoComments);

fs.writeFileSync('./src/generated/style.ts', module);