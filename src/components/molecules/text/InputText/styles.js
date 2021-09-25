import {StyleSheet} from 'react-native';
import colour from '../../../../assets/styles/colour';
import fonts from '../../../../assets/styles/fonts';
import styling from '../../../../assets/styles/styling';

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    backgroundColor: colour.GREEN[2],
    ...styling.row,
    height: 50,
    paddingLeft: 5,
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
  },
  input: {
    ...fonts.reg_14,
    overflow: 'hidden',
    height: 55,

    flex: 1,
  },
  inputStart: {
    paddingLeft: 28,
  },
  adorStart: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 10,
  },
  adorEnd: {
    position: 'absolute',
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 10,
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
  txtError: {
    ...fonts.medium_12,
    color: colour.RED,
    marginTop: 8,
  },
  txtHelper: {
    ...fonts.medium_12,
    color: colour.GREEN[2],
    marginTop: 8,
  },
  label: {
    ...fonts.semiBold_14,
    color: colour.TEXT,
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  error: {
    color: 'red',
    ...fonts.reg_12,
    marginTop: 7,
    marginBottom: 15,
  },
  textRule: {
    color: colour.GREEN[2],
    ...fonts.reg_12,
    marginRight: 4,
  },
  wrapRule: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 7,
  },
});

export default styles;
