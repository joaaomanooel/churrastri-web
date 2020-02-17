const { innerWidth, innerHeight } = window;

const getScale = (smallScreenScaling = 1, limitScale = true) => {
  let scale = ((innerWidth / 600) + (innerHeight / 600)) / 2;
  if (scale > 1 && limitScale) {
    scale = 1;
  } else if (scale < 1) {
    scale *= smallScreenScaling;
  }
  return scale;
};

export default {
  screenWidth: innerWidth,
  screenHeight: innerHeight,
  scale: getScale,
};
