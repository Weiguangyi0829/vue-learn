function createList(){
    const ul = document.createElement('ul');
    for (let i=0;i<name;i++){
        let li =document.createElement('li');
        li.innerHTML = i;
        ul.appendChild(li);
    
 }
 return ul;
}

module.exports = {
 createList
}