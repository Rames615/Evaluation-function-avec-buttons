
const button = document.getElementById('btn');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const form = document.querySelector('#formulaire');
const descriptionV = document.querySelector('#description');
const titreV = document.querySelector('#titre');
const imageV = document.querySelector('#image');

// way to reset the filled form

button.addEventListener('click', function() {
    form.reset();
  });
  

function addCard(){
    // e.preventDefault();
const card = document.createElement('div');
card.className = 'card';
form.appendChild(card);
const image = document.createElement('img');
image.src = imageV.value ;
card.appendChild(image);

const titre = document.createElement('h3');
titre.textContent = titreV.value;
card.appendChild(titre);

const paragraph = document.createElement('p');
 paragraph.textContent = descriptionV.value;
 card.appendChild(paragraph);

}

// button1.addEventListener('click',addCard);
button1.addEventListener('click', function(e){
    e.preventDefault();
    if (imageV.value && titreV.value && descriptionV.value){
        addCard();
    } else {
        alert('Aucune carte à supprimer !');
    }
});


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


const buttonAccept = document.getElementById("accepter");
const buttonSet = document.getElementById("paramettre");
const hideSec = document.getElementById("hide");

function hideDiv() {
    hideSec.style.display = "none";
}
buttonAccept.addEventListener('click', hideDiv);

// buttonAccept.addEventListener('click', ()=>
// hideSec.style.display = "none"
// );

//todo : change the size of the div according to cursor's movement

const div = document.getElementById("changeSize");

const screenWidth = window.innerWidth;

div.addEventListener("mousemove", (event) => {
    let newWidth = (event.clientX / screenWidth) * 100; // Convert to percentage
    div.style.width = newWidth + "%"; // Apply width dynamically
});
  
