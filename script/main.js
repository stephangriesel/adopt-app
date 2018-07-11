import fetchJsonp from 'fetch-jsonp';

const adoptForm = document.querySelector('#adopt-form');

adoptForm.addEventListener('submit', fetchAnimals);

// Fetch dogs/cats from API
function fetchAnimals(e) {
    e.preventDefault();

    // Get Input
    const animal = document.querySelector('#animal').value;
    const zip = document.querySelector('#zip').value;

    // Fetch and display
    fetchJsonp(`http://api.petfinder.com/pet.find?format=json&[xxxxENTERMYKEYxxxxx]&animal=${animal}&location=${zip}&callback=callback`, {jsonpCallbackFunction: 'callback'})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}