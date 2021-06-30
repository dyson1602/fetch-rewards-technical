//Returns y-coordinates on the screen to be used by scollCheck() function.

export const getWindowDimensions = () => {
  const {
    innerWidth: width,
    innerHeight: height,
    pageYOffset: screenTop,
  } = window;
  return { width, height, screenTop };
};
