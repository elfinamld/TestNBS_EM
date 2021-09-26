import {StyleSheet} from 'react-native';
import {widthScreen} from '../../../../assets/styles/styling';

const styles = StyleSheet.create({
  press: {
    borderWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: widthScreen * 0.75,
  },
});

export default styles;
