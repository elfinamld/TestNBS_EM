import React, {Component} from 'react';
import {View} from 'react-native';
import {styling} from '../../../../assets/styles';
import LoginTemp from '../../../templates/auth/LoginTemp/LoginTemp';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  _onSubmit = data => {};

  render() {
    const {loading} = this.state;
    return (
      <View style={styling.bodyFlex}>
        <LoginTemp onSubmit={this._onSubmit} loading={loading} />
      </View>
    );
  }
}

export default LoginPage;
