import * as data from './data.json';

import { render } from './renderer';

function getThingTemplate(thing) {
    return `<li>${thing.title} - ${thing.rt_score}</li>`;
}
function sortMyStuff(first, second) {
    if(parseInt(first.rt_score) > parseInt(second.rt_score)) {
        return -1;
    }
    else if(parseInt(first.rt_score) < parseInt(second.rt_score)) {
        return 1;
    }
    else {
        return 0;
    }
}
const things = data.results.sort(sortMyStuff);
let content = '<ul>';
for(let i=0; i < things.length; i++) {
    console.log(things[i]);
    content += getThingTemplate(things[i]);
}
content += '</ul>';
console.log('this is a feature branch');
render(content);
