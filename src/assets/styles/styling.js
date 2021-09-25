import {Dimensions} from 'react-native';
import colour from './colour';

export const heightScreen = Math.floor(Dimensions.get('screen').height);

export const widthScreen = Math.floor(Dimensions.get('screen').width);

export const heightWindow = Math.floor(Dimensions.get('window').height);

export const widthWindow = Math.floor(Dimensions.get('window').width);

export default {
  flex: {
    flex: 1,
  },
  bodyFlex: {
    flex: 1,
    backgroundColor: colour.WHITE,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
};
