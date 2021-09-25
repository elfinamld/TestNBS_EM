import {StyleSheet} from 'react-native';
import {colour} from '../../../../assets/styles';
import {widthScreen} from '../../../../assets/styles/styling';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    backgroundColor: colour.SOFT[6],
    width: widthScreen * 0.25,
    padding: 8,
    marginBottom: 20,
    borderRadius: 8,
  },
});

export default styles;
