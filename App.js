import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoadScreen from './screens/LoadScreen';

const Stack = createStackNavigator();
class App extends Component {
  
  render(){
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}/>
      <Stack.Screen name="Load" component={LoadScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
  }
}
export default App;