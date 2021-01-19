
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen.js'
import SantaClaus from './components/SantaClaus.js';
import {AppTabNavigator} from './components/AppTabNavigator';

export default function App() {
  
    return(
        
    <AppContainer/>
    );
  
 
}
const switchNavigator= createSwitchNavigator({
    WelcomeScreen:{screen:WelcomeScreen},
    Bottomtab:{screen:AppTabNavigator}
})
const AppContainer= createAppContainer(switchNavigator);

