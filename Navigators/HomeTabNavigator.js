import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CartIcon from '../Shared/CartIcon';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import AdminNavigator from './AdminNavigator';
import AuthGlobal from '../Context/store/AuthGlobal';
import Header from '../Shared/Header';
import UserProfile from '../Screens/User/UserProfile';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  const context = useContext(AuthGlobal);

  return (
    <>
      <Header />

      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#e91e63',
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name='home'
                style={{ position: 'relative',}}
                color={color}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Cart'
          component={CartNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <View>
                <Icon name='shopping-cart' color={color} size={30} />
                <CartIcon />
              </View>
            ),
          }}
        />
        {context?.stateUser?.user?.isAdmin === true ? (
          <Tab.Screen
            name='Admin'
            component={AdminNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name='cog' color={color} size={30} />
              )
            }}
          />
        ) : null}

        <Tab.Screen
          name='User Profile'
          component={UserProfile}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name='user' color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeTabNavigator;
