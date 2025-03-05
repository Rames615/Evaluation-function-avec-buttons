console.log('hello world');
const button = document.getElementById('btn');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const form = document.querySelector('#formulaire');
//const form = document.querySelector('form');

// way to reset the filled form

button.addEventListener('click', function() {
    form.reset();
  });
  

function addCard(e){
    e.preventDefault();
const card = document.createElement('div');
card.className = 'card';

const image = document.createElement('img');
// const image = document.querySelector('#image');
 image.src =image.value //"https://picsum.photos/1200?random=4";

const paragraph = document.createElement('p');
 paragraph.textContent = //"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"

card.appendChild(titre);
card.appendChild(image);

card.appendChild(paragraph);
form.appendChild(card);
}

button1.addEventListener('click',addCard);

function removeCard(e) {
    e.preventDefault();
    const deleteCard = form.lastChild;
    if(deleteCard){
        deleteCard.remove();
    } else {
        alert("Aucune carte à supprimer !");
    }
    
}

button2.addEventListener('click',removeCard);

