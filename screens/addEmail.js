import React from 'react';
import {View,TextInput} from 'react-native';
import StyAddEmail from './styless/styAddEmail';

function AddEmailScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }

  return (
    <View style={StyAddEmail.container}>
      <View
        style={StyAddEmail.vie1}>
        <TextInput
          keyboardType="web-search"
          style={StyAddEmail.textInput1}
          placeholder={'Email'}
          placeholderTextColor="#888"
        />
      </View>
    </View>
  );
}
export default AddEmailScreen;