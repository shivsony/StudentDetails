const data = JSON.parse(localStorage.getItem('items'));

const ul = document.querySelector('ul');

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

for(var i = 0 ;i<data.length;i++){
  liMaker(data[i].name);
  liMaker(data[i].email);
  liMaker(data[i].mob);
}