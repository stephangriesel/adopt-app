import fetchJsonp from 'fetch-jsonp';

const adoptForm = document.querySelector('#adopt-form');

adoptForm.addEventListener('submit', fetchAnimals);

// Fetch dogs/cats from API
function fetchAnimals(e) {
    e.preventDefault();

    // Get Input
    const breed = document.querySelector('#breed').value;
    /*const size = document.querySelector('#size').value;
    const location = document.querySelector('#location').value;*/

    // Fetch and display
    fetchJsonp(`https://api.thedogapi.com/v1/images/search?breed_id=&mime_types&limit=10&format`, {jsonpCallbackFunction: 'callback'})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}