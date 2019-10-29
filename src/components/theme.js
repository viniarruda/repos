const colors = {
  primary: '#FFFFFF',
  secondary: '#1B1A1A',
  tertiary: '#e1e1e1',
  danger: '#ff3f44',
};

const spacing = {
  sm: 5,
  md: 10,
  lg: 15,
};

const typography = {
  title: 30,
  subTitle: 16,
  text: 14,
};

const fontWeight = {
  light: 300,
  regular: 500,
  bold: 700,
};

const theme = Object.freeze({
  colors,
  spacing,
  fontWeight,
  typography,
});

export const getColorFromProps = props => {
  let finalColor = null;
  Object.keys(theme.colors).map(color => {
    if (color in props) {
      finalColor = theme.colors[color];
    }
  });

  return finalColor;
};

export default theme;
