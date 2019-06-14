import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
      },
    inputBox: {
      width:300,
      height: 40,
      backgroundColor:'rgba(255, 255,255,0.2)',
      marginBottom:20,
      color:'#121733',
      paddingHorizontal:50,
      borderRadius: 10,
      borderBottomColor:"#121733"
      },
    icon: {
      position: 'relative',
      top: -53,
      left: 250,
    },
      
});

export default styles;