const greenButton = document.getElementById('btn-green');
const blueButton = document.getElementById('btn-blue');
const roseButton = document.getElementById('btn-rose');
const randomButton = document.getElementById('btn-random');


function backgroundGreen(color) {
    document.body.style.backgroundColor = "#2EB086";
 }

function backgroundBlue(color) {
    document.body.style.backgroundColor = "#313552";    
}

function backgroundRose() {
    document.body.style.backgroundColor = "#F3C5C5";
    }

// funktioniert nicht
function backgroundRandom(color) {
    var letters ='0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
    document.body.style.backgroundColor = 'color';
    }
    

greenButton.addEventListener('click', backgroundGreen);

blueButton.addEventListener('click', backgroundBlue); 

roseButton.addEventListener('click', backgroundRose); 

// funktioniert nicht
randomButton.addEventListener('click', backgroundRandom); 