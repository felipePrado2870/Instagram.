import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import SplashScreen from './screens/splash';
import LoginScreen from './screens/login';
import NewAccontScreen from './screens/newLogin';
import HomeScreen from './screens/home';
import BottomTabScreen from './screens/bottomTab';
import EddtProfileScreen from './screens/edProfile';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login to your app" component={LoginScreen} />
        <Stack.Screen name="Creating an account" component={NewAccontScreen} />
        <Stack.Screen name="EditProfile" component={EddtProfileScreen} />
        <Stack.Screen name="BottomTab" component={BottomTabScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
