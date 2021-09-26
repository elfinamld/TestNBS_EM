import * as React from 'react';
import {Avatar} from 'react-native-paper';
import {colour} from '../../../../assets/styles';

const AvatarText = ({bgColor, color}) => (
  <Avatar.Text
    size={50}
    style={{
      backgroundColor: bgColor,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    labelStyle={{color: color, textAlign: 'center'}}
    label="L"
  />
);

AvatarText.defaultProps = {
  bgColor: colour.GREEN[6],
  color: colour.WHITE,
};

export default AvatarText;
