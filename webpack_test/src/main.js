const { add } =require('./utils/caculator');
const {createList}=require('./components/list');

let result = add(2,3);
console.log(result);

let ul = createList(10);
document.body.appendChild(ul);

console.log('hello');
