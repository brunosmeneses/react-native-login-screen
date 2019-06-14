import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style'


export default class InputPassword extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      icon:"visibility-off",
      password: true
    };
  
    this.changeIcon = this.changeIcon.bind(this);
  }

  changeIcon(){
    this.setState(prevState => ({
      icon: prevState.icon === 'visibility' ? "visibility-off" : 'visibility',
      password: !prevState.password
    }));
  }
  

  render(){
    return(
      <View>
        <TextInput style={styles.inputBox} 
          underlineColorAndroid="#121733" 
          selectionColor="#121733"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor = "#121733"
          secureTextEntry={this.state.password}
          label="Password"
        />

        <Icon style={styles.icon}
          name={this.state.icon}
          size={25}
          color="#121733"
          onPress={() => this.changeIcon()}
        />
      </View>
    );
  }
}