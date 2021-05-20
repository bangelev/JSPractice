// (function() {
//     const button = document.querySelector('#btn')
//     const body = document.querySelector('body')
//     const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
//     const value = document.querySelector('#hex-value')

//     button.addEventListener('click', changeHex)

//     function changeHex(){
//         let hex = '#'

//         for (let i = 0; i < 6; i++){
//             const index = Math.floor(Math.random()*hexValues.length)
//             hex += hexValues[index]
//         }
//         value.textContent = hex
//         body.style.backgroundColor = hex
//     }
// } )()

// function random255() {
//     return Math.floor(Math.random() * 256);
// }

// function randomColorMaker() {
//     return `rgb(${random255()},${random255()},${random255()})`
// }
const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
const hexValue = document.querySelector('#hex-value');
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function generateHex() {
    let hex = '#';
    for (i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index]
    } return hex
}

btn.addEventListener('click', function () {
    container.style.backgroundColor = generateHex();
    hexValue.textContent = generateHex()
})
