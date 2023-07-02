const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

fontSizeControl.addEventListener("input", changeFontSize);

function changeFontSize() {
  const fontSize = fontSizeControl.value + "px";
  textElement.style.fontSize = fontSize;

  console.log("Current font size:", fontSize);
}