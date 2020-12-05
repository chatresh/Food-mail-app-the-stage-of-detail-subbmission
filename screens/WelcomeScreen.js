
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
    ScrollView
    } from 'react-native';


import db from '../config';
import firebase from 'firebase';


import {Input} from 'react-native-elements'
import { RFValue } from "react-native-responsive-fontsize";


export default class WelcomeScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      confirmPassword:'',
      isModalVisible:false,

    }
  }
 
  userSignUp = (emailId, password,confirmPassword) =>{
   if(password !== confirmPassword){
       return Alert.alert("password doesn't match\nCheck your password.")
   }else{
     firebase.auth().createUserWithEmailAndPassword(emailId, password)
     .then(()=>{
       db.collection('users').add({
         first_name:this.state.firstName,
         last_name:this.state.lastName,
         contact:this.state.contact,
         email_id:this.state.emailId,
         address:this.state.address,
       })
       return alert(
            'User Added Successfully',
            '',
            [
              {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
            ]
        );
     })
     .catch((error)=> {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       return alert(errorMessage)
     });
   }
 }

userLogin = (emailId, password)=>{
   firebase.auth().signInWithEmailAndPassword(emailId, password)
   .then(()=>{
     this.props.navigation.navigate("HomeScreen")
   })
   .catch((error)=> {
     var errorCode = error.code;
     var errorMessage = error.message;
     return alert(errorMessage)
   })
 }

showModal = ()=>{
  return(
  <Modal
    animationType="fade"
    transparent={true}
    visible={this.state.isModalVisible}
    >
   <View style={{justifyContent:"center",alignItems:"center",borderRadius:20,borderWidth:2}}>
    <Text style={styles.modalTitle}>Register</Text>
    <TextInput
    style={styles.formTextInput}
    placeholder="First Name"
    onChangeText={(text)=>{
      this.setState({firstName:text})
    }}
    value={this.state.firstName}
   />
   <TextInput
    style={styles.formTextInput}
    placeholder="Last Name"
    onChangeText={(text)=>{
      this.setState({lastName:text})
    }}
    value={this.state.lastName}
   />
   <TextInput
    style={styles.formTextInput}
    placeholder="Address"
    onChangeText={(text)=>{
      this.setState({address:text})
    }}
    value={this.state.address}
   />
   <TextInput
    style={styles.formTextInput}
    placeholder="Contact"
    onChangeText={(text)=>{
      this.setState({contact:text})
    }}
    value={this.state.contact}
   />
   <TextInput
    style={styles.formTextInput}
    placeholder="EmailId"
    onChangeText={(text)=>{
      this.setState({emailId:text})
    }}
    value={this.state.emailId}
   />
   <TextInput
    style={styles.formTextInput}
    placeholder="Password"
    secureTextEntry={true}
    onChangeText={(text)=>{
      this.setState({password:text})
    }}
    value={this.state.password}
   />
   <TextInput
    style={styles.formTextInput}
    placeholder="confirm Password"
     secureTextEntry={true}
    onChangeText={(text)=>{
      this.setState({confirmPassword:text})
    }}
    value={this.state.confirmPassword}
   />
 <TouchableOpacity
            style={styles.registerButton}
            onPress={()=>
              this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
            }
          >
          <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={()=>this.setState({"isModalVisible":false})}
          >
          <Text style={styles.registerButtonText}>Cancel</Text>
          </TouchableOpacity>

   </View>
  </Modal>
)
}
  render(){
    return(
      <View style={styles.container}>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>

        </View>
          {
            this.showModal()
          }
        <View style={{justifyContent:'center', alignItems:'center'}}>
     
          <Text style={styles.title}>Food Mail</Text>
        </View>
        <View>
            <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
          <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        <TouchableOpacity
           style={[styles.button,{marginBottom:20, marginTop:50}]}
           onPress = {()=>{
             this.userLogin(this.state.emailId, this.state.password)
           }}
           >
           <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={{
              width:200,
              height:50,
              justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"blue",
   marginLeft:300,
   marginTop:-70,
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
           }}
           onPress={()=>this.setState({ isModalVisible:true})}
           >
           <Text style={styles.buttonText}>SignUp</Text>
         </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'white',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:RFValue(35),
   fontWeight:'500',
   paddingBottom:RFValue(30),
   color : 'blue'
 },
 loginBox:{
   width:RFValue(300),
   height: RFValue(40),
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: RFValue(20),
   alignItems:"center"
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:RFValue(30),
   color:'blue',
   margin:RFValue(20)
 },
 modalContainer:{
   flex:1,
   borderRadius:RFValue(20),
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:RFValue(30),
   marginLeft : RFValue(30),
   marginTop:RFValue(80),
   marginBottom:RFValue(80),
 },
 formTextInput:{
   width:"75%",
   height:RFValue(20),
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:RFValue(10),
   borderWidth:1,
   marginTop:RFValue(10),
   padding:RFValue(10)
    },
 registerButton:{
   width:RFValue(100),
   height:RFValue(40),
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:RFValue(10),
   marginTop:RFValue(15)
 },
 registerButtonText:{
   color:'blue',
   fontSize:RFValue(15),
   fontWeight:'bold'
 },
 cancelButton:{
   width:RFValue(200),
   height:RFValue(30),
   justifyContent:'center',
   alignItems:'center',
   marginTop:RFValue(5),
 },

 button:{
   width:200,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"blue",
   marginLeft:10,
   marginTop:-50,
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})
