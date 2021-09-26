import {StyleSheet} from 'react-native';
import {colour} from '../../../../assets/styles';
import {widthScreen} from '../../../../assets/styles/styling';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    width: widthScreen * 0.25,
    padding: 8,
    marginBottom: 20,
    borderRadius: 8,
  },
  bgColor: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colour.SOFT[6],
    padding: 8,
    width: widthScreen * 0.15,
    height: widthScreen * 0.15,
    borderRadius: 8,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRightColor: colour.GREEN[6],
    borderBottomColor: colour.GREEN[6],
  },
});

export default styles;
