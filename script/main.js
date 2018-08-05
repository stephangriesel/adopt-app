
// Get value from form
$(document).ready(() => {
    $('#adoptform').on('submit',(e) => {
        let breed =($('#breed').val());
        getBreed(breed);
        e.preventDefault();
    });
});

// Get value from form 
function getBreed(breed) {
    axios.get('https://api.thedogapi.com/v1/breeds/'+breed)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
}