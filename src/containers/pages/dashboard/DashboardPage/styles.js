import {StyleSheet} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';
import {heightScreen, widthScreen} from '../../../../assets/styles/styling';

const styles = StyleSheet.create({
  company: {
    ...fonts.bold_17,
    textAlign: 'center',
  },
  background: {
    backgroundColor: colour.SOFT[5],
    width: widthScreen,
    height: heightScreen * 0.3,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingTop: 30,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  greet: {
    marginTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});

export default styles;
