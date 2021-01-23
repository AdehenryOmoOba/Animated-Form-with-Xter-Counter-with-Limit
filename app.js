// Charater countdown from max limit to zero

// const input = document.querySelector("input");
// const counter = document.querySelector(".field-counter");
// const maxLenght = input.getAttribute("maxlength");
// counter.innerText = maxLenght;
// input.addEventListener("input", (event) => {
//   const lengthValue = event.target.value.length;
//   const countDown = maxLenght - lengthValue;
//   if (countDown < 0) {
//     return;
//   } else {
//     counter.innerText = countDown;
//   }
// });

// Charater counter from Zero to max limit

const input = document.querySelector("input");
const counter = document.querySelector(".field-counter");
counter.innerText = 0;
input.addEventListener("input", (event) => {
  const lengthValue = event.target.value.length;
  const countCharacter = lengthValue;
  if (countCharacter < 0) {
    return;
  } else {
    counter.innerText = countCharacter;
  }
});
