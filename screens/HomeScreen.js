import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView, 
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    Image,
    } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";
import {Input} from 'react-native-elements'
import {Header} from 'react-native-elements';

export default class HomeScreen extends React.Component{
    render(){
     return(
      <View>
      <Header
          centerComponent={{
                  text:"Food Mail",
                  style:{
                  color:"#03bcff",
                  fontSize:20,
                  fontWeight:"bold",
                  width:1200,
                  textAlign:"center"
                  }
              }}
            backgroundColor="#ffffff"  
       />

      <TouchableOpacity style={styles.button} onPress={()=>{
          this.props.navigation.navigate("DonateFormScreen")
      }}>
      <Text style={styles.buttonText}>Donate Food</Text>
      </TouchableOpacity>

      <Image style={styles.image} source={require("../assets/foodScarcy.jpg")}/>
      </View>
     )
    }
}

const styles = StyleSheet.create({
    button:{
     backgroundColor:"#03bcff",
     width:100,
     height:50,
     justifyContent:"center",
     alignSelf:"center",
     marginTop:50
    },
    buttonText:{
        color:"#ffff",
        textAlign:"center"
    },
    image:{
    width:200,
    height:300,
    marginTop:50,
    justifyContent:"center",
     alignSelf:"center",
    }
})