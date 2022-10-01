import React from 'react';
import {View,TextInput} from 'react-native';
import StyAddSenha from './styless/styAddSenha';

function AddSenhaScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }

  return (
    <View style={StyAddSenha.container}>
      <View
        style={StyAddSenha.view1}>
        <TextInput
          keyboardType="web-search"
          style={StyAddSenha.textInput1}
          placeholder={'Senha'}
          placeholderTextColor="#888"
        />
      </View>
      <View
        style={StyAddSenha.view2}>
        <TextInput
          keyboardType="web-search"
          style={StyAddSenha.textInput1}
          placeholder={'Confirme sua senha'}
          placeholderTextColor="#888"
        />
      </View>
    </View>
  );
}
export default AddSenhaScreen;