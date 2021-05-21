const counter = document.querySelector('#counter');
const buttons = document.querySelectorAll('.counterBtn');
let i = 0;

function changeColor(i) {
    counter.textContent = i;
    if (i > 0) {
        counter.style.color = 'green'
    } else if (i < 0) {
        counter.style.color = 'red'
    } else {
        counter.style.color = '#333333'
    }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('nextBtn')) {
            i++;
            changeColor(i);
            console.log('+')
        } else if (btn.classList.contains('prevBtn')) {
            i--;
            changeColor(i);
            console.log('-')
        }
    })
})

