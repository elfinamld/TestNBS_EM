import * as React from 'react';
import {Avatar} from 'react-native-paper';
import {colour} from '../../../../assets/styles';

const AvatarText = ({bgColor, color}) => (
  <Avatar.Text
    size={50}
    style={{backgroundColor: bgColor}}
    labelStyle={{color: color}}
    label="A"
  />
);

AvatarText.defaultProps = {
  bgColor: colour.BLUE[2],
  color: colour.WHITE,
};

export default AvatarText;
