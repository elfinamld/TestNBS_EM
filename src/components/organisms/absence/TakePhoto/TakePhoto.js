import React, {useState} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colour, fonts} from '../../../../assets/styles';
import styles from './styles';

const TakePhoto = () => {
  const [active, setActive] = useState(false);
  return (
    <Card
      style={{
        marginTop: 30,
        padding: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: colour.BLUE[1],
      }}>
      <View>
        <View style={styles.row}>
          <Text style={{...fonts.semiBold_13}}>Take Photo</Text>
          <Switch onValueChange={() => setActive(!active)} value={active} />
        </View>
        {active ? (
          <TouchableOpacity activeOpacity={0.5} style={styles.press}>
            <Icon name="image" size={40} color={colour.BLUE[4]} />
            <Text style={{...fonts.semiBold_13, color: colour.BLUE[4]}}>
              Image
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </Card>
  );
};

export default TakePhoto;
