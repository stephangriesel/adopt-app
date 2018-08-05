
// Get value from form
$(document).ready(() => {
    $('#adoptform').on('submit',(e) => {
        let breed =($('#breed').val());
        getBreed(breed);
        e.preventDefault();
    });
});

// Test value from form
function getBreed(breed) {
    console.log(breed);
}