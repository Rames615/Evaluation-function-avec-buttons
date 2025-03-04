const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const form = document.querySelector('.formulaire');

function addCard(e){
    e.preventDefault();
const card = document.createElement('div');
card.className = 'card';
const titre = document.createElement('title');
titre.textContent = "Mon titre";
const paragraph = document.createElement('p');
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"

card.appendChild(titre);
card.appendChild(paragraph);
form.appendChild(card);
}

button1.addEventListener('click',addCard);
