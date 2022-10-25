const range = document.getElementById('range');
const container = document.querySelector('.container');
// const container = document.getElementsByClassName('container');


range.addEventListener('input', () => {
    container.setAttribute("style", "filter:brightness(" + range.value + "%)");

})



// range.addEventListener('change', () => {
//     container.style = "filter:brightness(50%)";
// })