import * as data from './data.json';

import { render } from './renderer';

const things = data.results;
let content = '';
for(let i=0; i < things.length; i++) {
    console.log(things[i]);
    content += things[i].name;
}
console.log(content);
//const things = ['My Neighbors the Yamadas', 'Grave of the Fireflies'];
render(content);