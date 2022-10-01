import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import StyAddFone from './styless/styAddFone';

function AddFoneScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }

  return (
    <View style={StyAddFone.container}>
      <View
        style={StyAddFone.view1}>
        <TextInput
          keyboardType="numeric"
          style={StyAddFone.textInput}
          placeholder={'US+1'}
          placeholderTextColor="#888"
        />
        <View
          style={StyAddFone.view2}
        />
        <TextInput
          keyboardType="numeric"
          style={StyAddFone.textInput1}
          placeholder={'Telefone'}
          placeholderTextColor="#888"
        />
      </View>
      <View
        style={StyAddFone.view3}>
        <Text style={StyAddFone.text}>
          Você poderá receber notificaçõespo SMS para fins de
        </Text>
        <Text style={StyAddFone.text}>segurança e login</Text>
      </View>
    </View>
  );
}
export default AddFoneScreen;