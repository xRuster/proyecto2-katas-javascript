import "./OurButton.css"

export const ourButton = (texto, bgColor, clase="") => {
  return `<button style="background-color: ${bgColor}" class="ourButton${clase}">${texto}</button>`;
};