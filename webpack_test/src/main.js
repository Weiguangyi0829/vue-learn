const { add } = require('./utils/caculator');
const { createList } = require('./components/list');
require('./style.css');
const logo = require('./imgs/2.png');

let result = add(2, 3);
console.log(result);

let ul = createList(10);
document.body.appendChild(ul);

let img = document.createElement('img');
img.src = logo;
document.body.appendChild(img)

console.log('hello');
