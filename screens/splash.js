import React from 'react';
import {Text, Image, StatusBar, View} from 'react-native';
import StySplash from './styless/stySplash'
const instaIcon = require('../assets/Image-Logo.png');
const metaIcon = require('../assets/Image-Meta.png');
const login = (false)

function SplashScreen({navigation}) {
   var tmp=setTimeout(function(){
     login ? navigation.navigate('BottomTab') : navigation.navigate('Login to your app')
    }, 1500);
    
  return (
    <View
      style={StySplash.view1}>

      <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View
        style={StySplash.view2}>
        <Image
          style={StySplash.image1}
          source={instaIcon}
          resizeMode="contain"
        />
        <Text style={StySplash.text1}>
          from
        </Text>
        <Image
          style={StySplash.image2}
          source={metaIcon}
          resizeMode="contain"
        />
      </View>
      
    </View>
  );
}
export default SplashScreen;
