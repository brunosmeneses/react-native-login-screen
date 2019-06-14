import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    formArea : {
        justifyContent:'center',
        alignItems: 'center',
        height:230,
        width:320,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25,
        backgroundColor:'#FFFFFF',
        paddingTop:90,
        marginTop:-20
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
    iconEmail: {
        position: 'relative',
        top: -141,
        right: 120,
    
    },
    iconLock:{
        position: 'relative',
        top: -107,
        right: 120,
    },
    buttonArea:{
        marginTop:-30,
    },
    button: {
        width:210,
        backgroundColor:'#000B4D',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 13,
    },
    buttonText: {
        fontSize:18,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center',
    },
    logoArea:{
        justifyContent:'flex-end',
        alignItems:'center',
        flexGrow:1,
        marginBottom:40,
        marginTop:40
    },
    forgetArea:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:-10
    },
    forgetTouch:{
        height:36
    },
    forgetText:{
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'500',
        textDecorationLine:'underline'
    },
    signupArea : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:10,
        flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupTouch: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }, 
});

export default styles