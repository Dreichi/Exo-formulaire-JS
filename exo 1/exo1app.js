let monBouton = document.getElementById('monBouton');
let monParagraphe = document.getElementById('monParagraphe');
let maListe = document.getElementById('maListe');
monBouton.addEventListener('click', function(){
    alert('Hello World');
    monParagraphe.innerHTML = 'Je suis un paragraphe modifié';
});
monParagraphe.addEventListener('mouseover', function(){
    monParagraphe.style.color = 'red';
    monParagraphe.style.fontSize = '30px';
});
monBouton.addEventListener('click', function(){
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Nouvel élément';
    maListe.appendChild(newLi);
});
