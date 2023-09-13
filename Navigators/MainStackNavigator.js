import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../Screens/onboarding';
import Login from '../Screens/User/Login';
import Register from '../Screens/User/Register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeTabNavigator from './HomeTabNavigator';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const MainStackNavigator = () => {

    const { navigate } = useNavigation()

    let isUserLoggedIn = async () => {

        await AsyncStorage.getItem('jwt').then(value => {
            if (value) {
                navigate('Home');
            }
        })
    }

    useEffect(() => {

        isUserLoggedIn()

    }, [])

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name='Onboarding' component={Onboarding} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Home' component={HomeTabNavigator} />

        </Stack.Navigator>
    )
}

export default MainStackNavigator 