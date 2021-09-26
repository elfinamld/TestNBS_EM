import {StyleSheet} from 'react-native';
import {colour, fonts, styling} from '../../../../assets/styles';
// import {colour, fonts, styling} from '../../../../assets/styles';
import {heightScreen, widthScreen} from '../../../../assets/styles/styling';

const styles = StyleSheet.create({
  boxHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colour.GREEN[3],
    borderBottomWidth: 1,
    height: 63,
  },
  txtHeader: {
    ...fonts.semiBold_10,
    color: colour.GREEN[3],
    fontSize: 16,
  },
  modalBody: {
    width: widthScreen,
    height: heightScreen,
    justifyContent: 'flex-end',
    margin: 0,
  },
  body: {
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: 'white',
    width: '100%',
  },

  headerBox: {
    ...styling.noShadow,
    backgroundColor: colour.GREEN[3],
    height: 60,
  },
});
export default styles;
