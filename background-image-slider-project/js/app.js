const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

let indexP = 0;
const divImg = document.querySelector('.img-container');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('btn-left')) {
      indexP--;
      if (indexP < 0) {
        indexP = pictures.length - 1;
      }
      divImg.style.backgroundImage = `url('./img/${pictures[indexP]}.jpeg')`
      console.log(indexP)
    } else if (btn.classList.contains('btn-right')) {
      indexP++;
      if (indexP > pictures.length - 1) {
        indexP = 0;
      }
      divImg.style.backgroundImage = `url('./img/${pictures[indexP]}.jpeg')`
      console.log(indexP)
    }
  })
})

// [0, 1, 2, 3, 4]