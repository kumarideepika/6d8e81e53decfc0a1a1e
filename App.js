/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import Dashboard from './Screens/Dashboard';
import Details from './Screens/Details';
const Stack = createStackNavigator();

const App =()=>{
return(
<NavigationContainer>
  <StatusBar barStyle="dark-content"/>
  <Stack.Navigator>
    <Stack.Screen name ="Dashboard" component={Dashboard} options={{
      title:'Assignment',
      headerStyle:{
        backgroundColor: '#0947A5'
      },
      headerTintColor:'#fff'
    }} />
    <Stack.Screen name ="Details" component={Details} option={{
      title:'Details',
      headerStyle:{
        backgroundColor: '#0947A5'
      },
      headerTintColor:'#fff'
    }} />
  </Stack.Navigator>
</NavigationContainer>
);
}

export default App;
