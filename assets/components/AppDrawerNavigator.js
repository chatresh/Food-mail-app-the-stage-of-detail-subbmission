import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from './settings';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen'
import DonateFormScreen from '../screens/DonateFormScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home:{screen:HomeScreen},
  Settings:{screen:SettingScreen},
},
{
  initialRouteName:"Home"
})


