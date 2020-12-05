import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen'
import DonateFormScreen from './screens/DonateFormScreen'
export default function App() {
  return (
    <AppContainer/>
  );
}


const SwitchNavigator = createSwitchNavigator({
   
   WelcomeScreen:WelcomeScreen,
   HomeScreen:HomeScreen,
  DonateFormScreen:DonateFormScreen,
  
})

const AppContainer = createAppContainer(SwitchNavigator)