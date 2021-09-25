import {StyleSheet} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';
import {heightScreen, widthScreen} from '../../../../assets/styles/styling';

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 80,
    flex: 1,
  },
  text1: {...fonts.reg_22, fontSize: 24},
  text2: {...fonts.bold_30, marginTop: 10},
  wrapInput: {
    marginTop: 40,
  },
  input: {
    marginBottom: 20,
  },
  error: {color: 'red', ...fonts.reg_12, marginTop: -15, marginBottom: 15},
  textLink: {alignItems: 'center', marginTop: 40},
  header: {alignItems: 'center', marginTop: 45},
  image: {
    width: widthScreen * 0.35,
    height: heightScreen * 0.1,
  },
  text: {
    ...fonts.bold_18,
    color: colour.WHITE,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  wrapSign: {
    backgroundColor: colour.SOFT,
    marginHorizontal: 25,
    minHeight: heightScreen * 0.5,
    padding: 20,
    marginTop: 30,
    borderRadius: 30,
    borderColor: colour.TEXT,
    borderWidth: 1,
  },
  textTitle: {
    textAlign: 'center',
    color: colour.TEXT,
    ...fonts.bold_18,
    fontSize: 20,
    marginTop: 15,
  },
});
export default styles;
