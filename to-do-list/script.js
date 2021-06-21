let input = document.querySelector('.input');
let list = document.querySelector('#list');
let ul = document.createElement('ul');
list.appendChild(ul);

let count = 1;

function addItem() {
    let itemlist = document.querySelector('.itemlist');
    //itemlist.innerHTML = input.value;
    if (input.value != "") {
        let newLi = document.createElement('li');
        //newLi.className = 'list-item';
        newLi.id = 'item' + count;
        ul.appendChild(newLi);
        let litext = document.createTextNode(input.value);
        newLi.appendChild(litext);

        let newBtn = document.createElement('button');
        newBtn.id = 'remove' + count;
        newLi.append(newBtn);
        let btntext = document.createTextNode('delete');
        newBtn.appendChild(btntext);
        //newBtn.setAttribute('onclick', deleteItem(this));

        document.getElementById(newBtn.id).onclick = function() {
            deleteItem(newLi.id)
        };

        count++;
        input.value = '';
    }
    return;
}

function deleteItem(listId) {
    let removeItem = document.getElementById(listId);
    let containerList = removeItem.parentNode;
    containerList.removeChild(removeItem);
}