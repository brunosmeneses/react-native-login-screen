import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height:300,
        width:370,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25,
        backgroundColor:'#FFFFFF',
        paddingTop:90,
    },
    
    inputBox: {
        width:300,
        height: 40,
        backgroundColor:'rgba(255, 255,255,0.2)',
        marginBottom:20,
        color:'#121733',
        paddingHorizontal:50,
        borderRadius: 10,
        borderBottomColor:"#121733",
        marginTop:-50
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
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        marginTop:20
    },
    titleArea:{
        backgroundColor:"#121733",
        borderTopRightRadius:25,
        width:370,
        height:50,
        position:'relative',
        top:-135
    },
    title:{
        fontSize:20,
        color:"#FFFFFF",
        marginTop:15,
        textAlign:'center',
        fontWeight:'bold'
    },
    subTitleArea:{
        position:'relative',
        top:-100,
    },
    subTitle:{
        textAlign:'center',
        fontSize:17,
        color:"#121733"
    },
    iconEmail:{
        position:'relative',
        top:-55,
        left:-120
    }
    
});

export default styles