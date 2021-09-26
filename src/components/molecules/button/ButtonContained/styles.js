import {StyleSheet} from 'react-native';
import {fonts, styling} from '../../../../assets/styles';

const styles = StyleSheet.create({
  label: {
    textTransform: 'none',
    letterSpacing: 0,
    marginVertical: 13,
    ...fonts.semiBold_14,
  },
  outlined: {borderWidth: 1},
  noMargin: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  containIcon: {
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    top: 0,
    left: 65,
    width: 20,
    // ...styling.itemCentered,
  },
  white: {
    color: '#ffff',
  },
});

export default styles;
