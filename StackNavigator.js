import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen';
import MenuScreen from './Screen/MenuScreen';
import CartScreen from './Screen/CartScreen';
import Payment from './Screen/Payment';

const StackNavigator = () => {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Menu" component={MenuScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Cart" component={CartScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Payment" component={Payment}  options={{headerShown:false}}/>

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})