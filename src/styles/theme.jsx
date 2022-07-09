export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    accent: 'blue',
    mainBackground: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
    btnBackground: `#997070`,
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    big: '26px',
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '250ms cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
