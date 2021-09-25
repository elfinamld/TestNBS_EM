import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styling} from '../../../../assets/styles';
import HistoryTemp from '../../../templates/absence/HistoryTemp';

class HistoryPage extends Component {
  render() {
    return (
      <View style={styling.bodyFlex}>
        <HistoryTemp />
      </View>
    );
  }
}

export default HistoryPage;
