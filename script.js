const lighterColours = [];
const darkerColours = [];

const colourPicker = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * (80 - 20 + 1) + 20);
  const light = Math.floor(Math.random() * (45 - 30 + 1) + 45);
  return [{ hue: hue, saturation: saturation, light: light }];
};

const lighterShades = (colour, count) => {
  if (count === 0) {
    console.log(lighterColours);
  } else {
    const { hue, saturation, light } = colour;
    let newHue = hue + generateColourShift(20, 10);
    if (newHue >= 360) {
      newHue = 0;
    }
    let newSaturation = saturation - generateColourShift(20, 10);
    if (newSaturation <= 0) {
      newSaturation = 0;
    }
    let newLight = light + generateColourShift(20, 10);
    if (newLight >= 100) {
      newLight = 85;
    }
    newColour = { hue: newHue, saturation: newSaturation, light: newLight };
    lighterColours.push(newColour);
    lighterShades(newColour, count - 1);
  }
};

const darkerShades = (colour, count) => {
  if (count === 0) {
    console.log(darkerColours);
  } else {
    const { hue, saturation, light } = colour;
    let newHue = hue - generateColourShift(20, 10);
    if (newHue <= 0) {
      newHue = 360;
    }
    let newSaturation = saturation + generateColourShift(20, 10);
    if (newSaturation >= 100) {
      newSaturation = 100;
    }
    let newLight = light - generateColourShift(30, 15);
    if (newLight <= 0) {
      newLight = 20;
    }
    newColour = { hue: newHue, saturation: newSaturation, light: newLight };
    darkerColours.push(newColour);
    darkerShades(newColour, count - 1);
  }
};

const generateColourShift = (upperB, lowerB) => {
  const number = Math.floor(Math.random() * (upperB - lowerB + 1) + lowerB);
  return number;
};

const generateShades = async (baseColourArr) => {
  const baseColour = baseColourArr[0];
  lighterShades(baseColour, 1);
  darkerShades(baseColour, 1);
  lighterColours.reverse();
  const combinedArr = lighterColours.concat(baseColourArr, darkerColours);
  console.log(combinedArr);
  displayColours(combinedArr);
};

function createEventListener(hslColour) {
  var displayHex = document.createElement("div");
  displayHex.classList.add("displayClass");
  displayHex.innerHTML = hslColour;
  displayHex.addEventListener("click", () => {
    navigator.clipboard.writeText(hslColour);
    displayHex.innerHTML = "Copied!";
    setTimeout(() => {
      displayHex.innerHTML = hslColour;
    }, 1000);
  });
  return displayHex;
}

const displayColours = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    const hslColour =
      "hsl(" +
      arr[i].hue +
      ", " +
      arr[i].saturation +
      "%, " +
      arr[i].light +
      "%)";
    var currentDiv = document.getElementById("container");
    var colourBlock = document.createElement("div");
    var displayHex = createEventListener(hslColour);
    currentDiv.appendChild(colourBlock);
    colourBlock.appendChild(displayHex);
    colourBlock.style.background = hslColour;
  }
};

const baseColour = colourPicker();
generateShades(baseColour);
