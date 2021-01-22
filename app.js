const input = document.querySelector("input");
const counter = document.querySelector(".field-counter");
const maxLenght = input.getAttribute("maxlength");
counter.innerText = maxLenght;
input.addEventListener("input", (event) => {
  const lengthValue = event.target.value.length;
  const countDown = maxLenght - lengthValue;
  if (countDown < 0) {
    return;
  } else {
    counter.innerText = countDown;
  }
});
