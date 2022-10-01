import * as React from 'react';
import ProfileScreen from './profile';
import HomeScreen from './home';
import PesquisaScreen from './pesquisa';
import VideosScreen from './videos';
import ComprScreen from './compr';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Naveg = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      style
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        tabStyle: {paddingBottom: 5, paddinTop: 5, backgroundColor: '#000'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="pesquisa"
        component={PesquisaScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="videos"
        component={VideosScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'videocam' : 'videocam-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Compras"
        component={ComprScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'shopping' : 'shopping-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile2"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Naveg;
