import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import styles from './style'


export default class Logo extends Component {

	render(){

		return(

			<View style={styles.container}>
				<Image  style={{width:40, height: 70}}
					source={require('../../assets/img/logo.jpg')}/>
				<Text style={styles.logoText}>TESTE</Text>	
			</View>
			
		);
	}
}