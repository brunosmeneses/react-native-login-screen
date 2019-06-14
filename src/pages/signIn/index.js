import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './style'
import Logo from '../../components/logo/index';
import InputPassword from '../../components/inputPassword/index';


export default class SignIn extends Component {
  
  render() {
    return (

      <LinearGradient 
      colors={['#242E66','#313F8C', '#3A4AA6']}
      start={{x: 0, y: 0}} end={{x: 1, y: 1}}
      style={styles.linearGradient}>

      <View style={styles.container}>

        <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />

        <View style={styles.logoArea}>
          <Logo></Logo>
        </View>

        <View style={styles.formArea}>
          <TextInput style={styles.inputBox}
          underlineColorAndroid="#121733"
          placeholder="Email"
          placeholderTextColor = "#121733"
          selectionColor="#121733"
          keyboardType="email-address"
          onSubmitEditing={()=> this.password.focus()}
          importantForAutofill="auto"
          />

          <InputPassword></InputPassword>    

          <Icon style={styles.iconEmail}
          name={"person"}
          size={25}
          color="#121733"
          />

          <Icon style={styles.iconLock}
          name={"lock"}
          size={25}
          color="#121733"
          />   
        </View>

        <View style={styles.buttonArea}>
          <TouchableHighlight  underlayColor="#3F51B5" style={styles.button}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableHighlight>     
        </View>

        <View style={styles.forgetArea}>
          <TouchableOpacity style={styles.forgetTouch}>
            <Text style={styles.forgetText}> Esqueceu a senha ?</Text>
          </TouchableOpacity>  
        </View> 

        <View style={styles.signupArea}>
          <Text style={styles.signupText}>Ainda não tem uma conta ?</Text>
          <TouchableOpacity><Text style={styles.signupTouch}> Cadastre-se</Text></TouchableOpacity>
        </View>   

      </View>

      </LinearGradient>

    );
  }
}