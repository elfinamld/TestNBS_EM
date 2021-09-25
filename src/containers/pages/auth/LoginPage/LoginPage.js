import React, {Component} from 'react';
import {View} from 'react-native';
import {styling} from '../../../../assets/styles';
import {_replace} from '../../../../config/routes/NavigationServices';
import {screens} from '../../../../config/routes/screens';
import LoginTemp from '../../../templates/auth/LoginTemp/LoginTemp';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  _onSubmit = data => {
    _replace(screens.dashboard);
  };

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
