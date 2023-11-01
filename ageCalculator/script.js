// Write your code below
// get DOM elements
const form = document.querySelector('form');
const birthdateInput = document.querySelector('#birthdate');
const ageOutput = document.querySelector('#age');

// listen for form submit event
form.addEventListener('submit', function(e) {
  e.preventDefault();


  // get input value
  const birthdateString = birthdateInput.value;


  // validate input with regex
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateRegex.test(birthdateString)) {
    alert('Please enter a valid birthdate in MM/DD/YYYY format.');
    return;
  }


  // parse input as date object
  const birthdate = new Date(birthdateString);

  // calculate age
  const ageInMilliseconds = Date.now() - birthdate.getTime();
  const ageDate = new Date(ageInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);


  // display age
  ageOutput.textContent = `You are ${age} years old.`;
});

form.addEventListener('reset', function() {
  ageOutput.textContent = null;
})