const colourPicker = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * (80 - 40 + 1) + 40);
  const light = Math.floor(Math.random() * (80 - 40 + 1) + 40);
  return { hue: hue, saturation: saturation, light: light };
};

const lighterShades = (colour) => {
  const { hue, saturation, light } = colour;
};

const generateShades = (baseColour) => {
  lighterShades(baseColour);
  const darkerShades = darkerShades(baseColour);
};

// const colourDisplay = (colour) => {
//   const hslColour =
//     "hsl(" +
//     colour[0].hue +
//     ", " +
//     colour[0].saturation +
//     "%, " +
//     colour[0].light +
//     "%)";
//   var currentDiv = document.getElementById("container");
//   var newDiv = document.createElement("div");
//   newDiv.classList.add("newDivClass");
//   currentDiv.appendChild(newDiv);
//   newDiv.style.background = hslColour;
//   console.log(newDiv);
// };

const baseColour = colourPicker();
generateShades(baseColour);
