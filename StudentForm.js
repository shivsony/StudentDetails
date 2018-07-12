const form = document.querySelector('form');
const input1 = document.getElementById('name');
const input2 = document.getElementById("email");
const input3 = document.getElementById("mob");

function Student(name,email,mob) {
    this.name = name;
    this.email = email;
    this.mob = mob;
}

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


localStorage.setItem('items', JSON.stringify(itemsArray));
//const data = JSON.parse(localStorage.getItem('items'));

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(new Student(input1.value,input2.value,input3.value));
  localStorage.setItem('items', JSON.stringify(itemsArray));
  input1.value = "";
  input2.value = "";
  input3.value = "";
});