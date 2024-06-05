let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50]
let container = document.querySelector('.container')

let list = document.createElement('ul');

for (let i = 0; i < data.length; i++) {
    let num = data[i];
    let listItem = document.createElement('li');
    listItem.textContent = num;
    
    if (num >= 50) {
        listItem.style.backgroundColor = 'green';
    } else if (num < 50) {
        listItem.style.backgroundColor = 'red';
    }
    
    list.appendChild(listItem);
}



document.body.appendChild(list);