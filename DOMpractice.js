const newExercise = document.getElementById('nycda-title');
newExercise.innerText = "Welcome to NYCDA";

const exercise2 = document.getElementById('nycda-help-message');
exercise2.innerText = "Ask people in NYCDA for help if you're struggling";

const exercise3 = document.getElementsByClassName('nycda-class');
console.log(exercise3[exercise3.length - 1]);

const exercise4 = document.getElementsByTagName('p');
console.log(exercise4[1]);

const exercise5 = document.querySelector('input');

let newInput = document.getElementById('input-important');

let value = '';
const exercise6 = document.getElementById('submit-button');
exercise6.addEventListener('click', function() {
  value = newInput.value;
});

const redBox = document.getElementById('box-red');
redBox.addEventListener('mouseover', function() {
  newExercise.innerText = "LOOK AT THIS IM HOVERING MA!";
});

const blueBox = document.getElementById('box-blue');
blueBox.addEventListener('mouseover', function() {
  redBox.style.backgroundColor = 'orange';
});

document.body.addEventListener('keypress', function(r) {
  if (r.key === 'r') {
  newExercise.innerText = 'Pew Pew Pew';
}
});
