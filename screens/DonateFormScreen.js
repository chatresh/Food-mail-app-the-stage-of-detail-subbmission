import React,{Component}from 'react';
import {View,Text,TextInput,Modal,KeyboardAvoidingView,StyleSheet,TouchableOpacity,
Alert, ScrollView, Image,} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";
import {Input,CheckBox} from 'react-native-elements'
import {Header} from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";
var email;
export default class DonateFormScreen extends React.Component{
    constructor(){
        super()
        this.state={
         userId:firebase.auth().currentUser.email,
         foodName:'',
         place:'',
         type:'',
         quantity:'',
         timeOfCooked:'',
         suitable:'',
         usableDuration:'',
         description:'',
         address:'',
         pickUpTime:'', 

         isDateTimePickerVisible:false,
         isDateTimePickerVisible:true,
         duration:'',

         isSelected:false, 
         setSelection:true,
      }
    }

     SubmitDetails=()=>{
        db.collection("DonationDetails").add({
         userId:this.state.userId,
         FoodName:this.state.foodName,
         Place:this.state.place,
         TypeOfFood:this.state.type,
         Quantity:this.state.quantity,
         TimeOfCooked:this.state.timeOfCooked,
         Suitable:this.state.suitable,
         UsableDuration:this.state.usableDuration,
         Description:this.state.description,
         PickUpAddress:this.state.address,
         PickUpTime:this.state.pickUpTime,
        })
        alert("Check Your Details")
    }

    showDateTimePicker2=()=>{
      this.setState({isDateTimePickerVisible2:true})
    }
    hideDateTimePicker2=()=>{
      this.setState({isDateTimePickerVisible2:false})
    }
    handleDatePicked2= date =>{
      console.log("A date has been picked",date)
      this.setState({usableDuration:date})
      this.hideDateTimePicker() 
    }

    showDateTimePicker=()=>{
      this.setState({isDateTimePickerVisible:true})
    }
    hideDateTimePicker=()=>{
      this.setState({isDateTimePickerVisible:false})
    }
    handleDatePicked= date =>{
      console.log("A date has been picked",date)
      this.setState({duration:date})
      this.hideDateTimePicker() 
    }

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
             <Text style={styles.buttonText}>1.Name of the food</Text>
             <Input style={styles.input} placeHolder="food Name"
            onChangeText={(text)=>{
              this.setState({foodName:text})
             }}
            value={this.state.foodName}
            />
            <Text style={styles.buttonText}>2.Restaurant or home</Text>

             <TouchableOpacity onPress={()=>{
               this.setState({place:"Restaurant"})
               return alert('You have selected restaurant')
             }} style={styles.Button}>
             <Text style={styles.ButtonText}>Restaurant</Text>
             </TouchableOpacity>

              <TouchableOpacity onPress={()=>{
               this.setState({place:"Home"})
               return alert('You have selected Home')
             }} style={{
                backgroundColor:"blue",
                width:170,
                height:45,
                justifyContent:"center",
                marginTop:RFValue(10),
                borderRadius:17,
                borderWidth:2,
                borderColor:"#ffff",
                alignItems:"center",
                alignSelf:"center"
             }}>
             <Text style={styles.ButtonText}>Home</Text>
             </TouchableOpacity>

            <Text style={styles.buttonText}>3.Veg or non-veg</Text>

              <TouchableOpacity onPress={()=>{
               this.setState({type:"Veg"})
               return alert('You have selected Veg')
             }} style={{
                backgroundColor:"green",
                width:170,
                height:45,
                justifyContent:"center",
                marginTop:RFValue(10),
                borderRadius:17,
                borderWidth:2,
                borderColor:"#ffff",
                alignItems:"center",
                alignSelf:"center"
             }}>
             <Text style={styles.ButtonText}>Veg</Text>
             </TouchableOpacity>

              <TouchableOpacity onPress={()=>{
               this.setState({type:"Non-Veg"})
               return alert('You have selected Non-Veg')
             }} style={{
                backgroundColor:"red",
                width:170,
                height:45,
                justifyContent:"center",
                marginTop:RFValue(10),
                borderRadius:17,
                borderWidth:2,
                borderColor:"#ffff",
                alignItems:"center",
                alignSelf:"center"
             }}>
             <Text style={styles.ButtonText}>Non-Veg</Text>
             </TouchableOpacity>

            <Text style={styles.buttonText}>4.What is the quantity of food approximately</Text>
            <Input style={styles.input} placeHolder="Quantity"
            onChangeText={(text)=>{
              this.setState({quantity:text})
             }}
            value={this.state.quantity}
            />
            <Text style={styles.buttonText}>5.How long has it be since cooked or brought</Text>
           
            <View>
              <TouchableOpacity style={{
                 backgroundColor:"#03bcff",
                 width:200,
                 height:50,
                 justifyContent:"center",
                 marginTop:RFValue(10),
                 borderRadius:17,
                 borderWidth:2,
                 borderColor:"#ffff",
                 alignItems:"center",
                 alignSelf:"center"
              }} onPress={()=>{
                this.showDateTimePicker()
              }}>
              <Text style={{
                fontSize:RFValue(15),
                color:"white",
                textAlign:"center"
              }}>Date Picker</Text>
              </TouchableOpacity>

              <DateTimePickerModal
              isVisible={this.state.isDateTimePickerVisible}
              mode="datetime"
              isConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
              />
            </View>

            <Text style={styles.buttonText}>6.Is the food suitable for both , children and adults</Text>
            <Input style={styles.input} placeHolder="Children or adults"
            onChangeText={(text)=>{
              this.setState({suitable:text})
             }}
            value={this.state.suitable}
            />
            <Text style={styles.buttonText}>7.What is usable duration</Text>
            <View>
            <TouchableOpacity style={{
                 backgroundColor:"#03bcff",
                 width:200,
                 height:50,
                 justifyContent:"center",
                 marginTop:RFValue(10),
                 borderRadius:17,
                 borderWidth:2,
                 borderColor:"#ffff",
                 alignItems:"center",
                 alignSelf:"center"
              }} onPress={()=>{
                this.showDateTimePicker2()
              }}>
              <Text style={{
                fontSize:RFValue(15),
                color:"white",
                textAlign:"center"
              }}>Date Picker</Text>
              </TouchableOpacity>

              <DateTimePickerModal
              isVisible={this.state.isDateTimePickerVisiblle2}
              mode="datetime"
              isConfirm={this.handleDatePicked2}
              onCancel={this.hideDateTimePicker2}
              />
            </View>
            <Text style={styles.buttonText}>8.Enter a brief discription</Text>
            <Input style={styles.input} placeHolder=""
            onChangeText={(text)=>{
              this.setState({description:text})
             }}
            value={this.state.description}
            />
            <Text style={styles.buttonText}>9.Enter pick up address</Text>
            <Input style={styles.input} placeHolder="Address"
            onChangeText={(text)=>{
              this.setState({address:text})
             }}
            value={this.state.address}
            />
            <Text style={styles.buttonText}>10.Enter pick up time</Text>
            <Input style={styles.input} placeHolder="Time"
            onChangeText={(text)=>{
              this.setState({pickUpTime:text})
             }}
            value={this.state.pickUpTime}
            />

            <View>
            <TouchableOpacity style={styles.button} onPress={()=>{
              this.SubmitDetails();
            }}>
            <Text style={{color:"#ffff",textAlign:"center"}}>Submit</Text>
            </TouchableOpacity>
            </View>
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
     alignSelf:"flex-end",
     marginTop:RFValue(30),
     borderRadius:17,
     borderWidth:2,
     borderColor:"#ffff",
    alignItems:"center"
    },
    buttonText:{
        fontSize:RFValue(10),
        fontWeight:"bold",
        marginTop:RFValue(10),
        marginLeft:RFValue(10),
        textAlign:"center"
    },
    input:{
      width:"75%",
    height:RFValue(35),
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:RFValue(10),
    borderWidth:RFValue(1),
    marginTop:RFValue(20),
    padding:RFValue(10),
    textAlign:"center",
    alignItems:"center",
    },
    Button:{
  backgroundColor:"orange",
   width:170,
   height:45,
   justifyContent:"center",
   marginTop:RFValue(10),
   borderRadius:17,
   borderWidth:2,
   borderColor:"#ffff",
   alignItems:"center",
   alignSelf:"center"
    },
    ButtonText:{
       fontSize:RFValue(15),
       color:"white",
       textAlign:"center"
    }
    
})