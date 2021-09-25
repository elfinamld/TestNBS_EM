import {StyleSheet} from 'react-native';
import {colour} from '../../../../assets/styles';
import {heightScreen} from '../../../../assets/styles/styling';

const styles = StyleSheet.create({
  press: {
    backgroundColor: colour.BLUE[7],
    borderRadius: 8,
    height: heightScreen * 0.1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
