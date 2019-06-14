import React, {Component} from 'react';
import {View, Text, StatusBar, TextInput, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './style'
import Logo from '../../components/logo/index';



export default class ForgotPassword extends Component {
  
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

            <View style={styles.titleArea}>
              <Text style={styles.title}>Esqueceu sua senha ?</Text>
            </View>

            <View style={styles.subTitleArea}>
              <Text style={styles.subTitle}>Digite seu email a seguir e lhe enviaremos um email com instruções para a recuperação de sua senha.</Text>
            </View>

            <TextInput style={styles.inputBox}
            underlineColorAndroid="#121733"
            placeholder="Email"
            placeholderTextColor = "#121733"
            selectionColor="#121733"
            keyboardType="email-address"
            onSubmitEditing={()=> this.password.focus()}
            importantForAutofill="auto"
            /> 

            <Icon style={styles.iconEmail}
            name={"email"}
            size={25}
            color="#121733"
            />
          </View>

          <View style={styles.buttonArea}>
            <TouchableHighlight  underlayColor="#3F51B5" style={styles.button}>
              <Text style={styles.buttonText}>ENVIAR</Text>
            </TouchableHighlight>     
          </View> 

        </View>

      </LinearGradient>

    );
  }
}