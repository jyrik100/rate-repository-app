import { Text as NativeText, StyleSheet } from 'react-native';

import theme from './theme';

const styles = StyleSheet.create({
  text: { 
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading, // 2. row listen to this 
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeNormal: {
    fontSize: theme.fontSizes.normal,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'normal' && styles.fontSizeNormal,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;