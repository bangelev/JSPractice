// Selecting elements
const btn = document.querySelector('.btn');
const body = document.querySelector('body');

// Creating random color func
function random255() {
    return Math.floor(Math.random() * 256);
}

function randomColorMaker() {
    return `rgb(${random255()},${random255()},${random255()})`
}

// Adding listener
btn.addEventListener('click', function () {
    // body.style.backgroundColor = randomColorMaker();
    body.style.background = "linear-gradient(to right, "
        + randomColorMaker()
        + ", "
        + randomColorMaker()
        + ")";

})