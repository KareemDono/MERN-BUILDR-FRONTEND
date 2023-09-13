import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckoutNavigator from './CheckoutNavigator';
import Cart from '../Screens/Cart/Cart';
import Login from '../Screens/User/Login';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Cart'
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Checkout'
        component={CheckoutNavigator}
        options={{
          title: 'Checkout',
        }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function CartNavigator() {
  return <MyStack />;
}
