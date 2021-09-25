import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {colour, styling} from '../../../../assets/styles';
import AvatarText from '../../../../components/molecules/avatar/AvatarText';
import CardAbsence from '../../../../components/molecules/card/CardAbsence';
import CardGreeting from '../../../../components/molecules/card/CardGreeting';
import ListMenu from '../../../../components/organisms/menu/ListMenu';
import styles from './styles';

class DashboardPage extends Component {
  render() {
    return (
      <View style={styling.bodyFlex}>
        <View style={styles.background}>
          <View style={styles.row}>
            <AvatarText color={colour.WHITE} />
            <Text style={styles.company}> Attendance App </Text>
            <AvatarText bgColor={'transparent'} color={'transparent'} />
          </View>
          <View style={styles.greet}>
            <CardGreeting />
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <CardAbsence />
          <ListMenu />
        </View>
      </View>
    );
  }
}

export default DashboardPage;
