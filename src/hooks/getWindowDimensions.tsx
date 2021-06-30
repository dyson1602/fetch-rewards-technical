export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height, pageYOffset: screenTop } = window;
  return { width, height, screenTop };
};
