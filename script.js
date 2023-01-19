const colourPicker = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * (80 - 40 + 1) + 40);
  const light = Math.floor(Math.random() * (80 - 40 + 1) + 40);
  return "hsl(" + hue + ", " + saturation + "%, " + light + "%)";
};

const shadeGenerator = () => {};

const baseColour = colourPicker();
