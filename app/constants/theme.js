import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#FA690D', // Vivid orange
  secondary: '#FEE8DA', // Light grayish orange

  white: '#FFFFFF',
  textTitle: '#232323',
  subtitle: '#656565',
  displayText: '#A8A8A8',
  base: '#F7F7F7',
  titleBg: '#EDEDED',

  errorMsg: '#FF4747',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 24,
  padding: 10,
  padding2: 12,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  title1: 30,
  title2: 22,
  title3: 16,
  title4: 14,
  body1: 24,
  body2: 18,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,

  // specific height for device
  deviceHeight: 896,
};

export const FONTS = {
  h1: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  title1: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.title1,
    lineHeight: 36,
  },
  title2: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.title2,
    lineHeight: 30,
  },
  title3: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.title3,
    lineHeight: 22,
  },
  title4: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.title4,
    lineHeight: 22,
  },
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 30},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
  body6: {fontFamily: 'Roboto-Regular', fontSize: SIZES.h1, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
