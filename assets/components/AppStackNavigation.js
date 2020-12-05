import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen'
import DonateFormScreen from '../screens/DonateFormScreen'
import Message from '../screens/Message'

export const AppStackNavigator = createStackNavigator({
  HomeScreen:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  DonateForm:{
      screen:DonateFormScreen,  
       navigationOptions:{
          headerShown:false
      }
  },
})