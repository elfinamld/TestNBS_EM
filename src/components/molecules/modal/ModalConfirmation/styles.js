import {StyleSheet} from 'react-native';
import {colour, fonts, styling} from '../../../../assets/styles';

const styles = StyleSheet.create({
  modalBody: {
    ...styling.itemCentered,
    margin: 0,
  },
  body: {
    width: '75%',
    borderRadius: 8,
    backgroundColor: colour.WHITE,
    padding: 8,
  },
  box: {
    position: 'relative',
    marginTop: 24,
    paddingHorizontal: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBox: {
    ...styling.noShadow,
    backgroundColor: colour.GREEN[6],
    height: 60,
  },
  textBtn: {
    ...fonts.semiBold_14,
    textAlign: 'center',
  },
  button: {
    height: 46,
    width: 250,
  },
  btnPosition: {
    marginTop: 21,
    marginBottom: 34,
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: -5,
    padding: 0,
  },
  fullBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
});
export default styles;
