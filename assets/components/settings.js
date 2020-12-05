import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase'
import {Input} from 'react-native-elements'

import { RFValue } from "react-native-responsive-fontsize";

export default class SettingScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId   : '',
      firstName : '',
      lastName  : '',
      address   : '',
      contact   : '',
      docId     : ''
    }
  }

  getUserDetails=()=>{
    var email = firebase.auth().currentUser.email;
    db.collection('users').where('email_id','==',email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      var data = doc.data()
        this.setState({
          emailId   : data.email_id,
          firstName : data.first_name,
          lastName  : data.last_name,
          address   : data.address,
          contact   : data.contact,
          docId     : doc.id
        })
      });
    })
  }

  updateUserDetails=()=>{
    db.collection('users').doc(this.state.docId)
    .update({
      "first_name": this.state.firstName,
      "last_name" : this.state.lastName,
      "address"   : this.state.address,
      "contact"   : this.state.contact,
    })

    alert("Profile Updated Successfully")

  }

  componentDidMount(){
    this.getUserDetails()
  }


  render(){
    return(
      <View style={styles.container} >
        <View style={styles.formContainer}>
            <Input
              style={styles.formTextInput}
              placeholder ={"First Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}
              value ={this.state.firstName}
            />
            <Input
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  lastName: text
                })
              }}
                value ={this.state.lastName}
            />
            <Input
              style={styles.formTextInput}
              placeholder ={"Contact"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  contact: text
                })
              }}
                value ={this.state.contact}
            />
            <Input
              style={styles.formTextInput}
              placeholder ={"Address"}
              multiline = {true}
              onChangeText={(text)=>{
                this.setState({
                  address: text
                })
              }}
                value ={this.state.address}
            />
            <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.updateUserDetails()
              }}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer:{
    flex:1,
    width:'100%',
    alignItems: 'center'
  },
  formTextInput:{
    width:"75%",
    height:RFValue(35),
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:RFValue(10),
    borderWidth:RFValue(1),
    marginTop:RFValue(20),
    padding:RFValue(10),
  },
  button:{
    width:"75%",
    height:RFValue(50),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:RFValue(10),
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: RFValue(0),
       height: RFValue(8),
    },
    shadowOpacity:RFValue(0.44),
    shadowRadius:RFValue(10.32),
    elevation:RFValue(16),
    marginTop:RFValue(20)
  },
  buttonText:{
    fontSize:RFValue(25),
    fontWeight:"bold",
    color:"#fff"
  }
})