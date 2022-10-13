import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';
import auth from '@react-native-firebase/auth'
import StyLogin from './styless/styLogin';
import AntDesing from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const instaLogoIcon = require('../assets/instagram-name-logo.png');

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);

  function executeClick() {
    auth().signInWithEmailAndPassword(email,senha)
    .then(() =>{
    console.log('usuario Logado!')
    navigation.navigate('BottomTab')
   })
    .catch(error =>{
        if (error.code === 'auth/wrong-password') {
          console.log('Senha incorreta.');
          Alert.alert('Atenção', 'Senha incorreta.')
        }
        if (error.code === 'auth/invalid-email') {
          console.log('email invalido');
          Alert.alert('Atenção', 'Email invalido')
        } 
      })
  }
  

  function newAccontClick() {
    navigation.navigate('Creating an account');

  }
  return (
    <View style={StyLogin.view}>
    
      <View
        style={StyLogin.viewImag1}>
        <Image
          style={StyLogin.imag1}
          source={instaLogoIcon}
          resizeMode="contain"
        />
      </View>
      <View >
        <View style={StyLogin.viewTextInp1}>
        <TextInput
          style={StyLogin.textInput}
          placeholder={'Telefone, nome de usuário ou endereço de e-mail'}
          placeholderTextColor="#FFF"
          onChangeText={value => setEmail(value)}
        /></View>
        <View
          style={StyLogin.viewTextInp2}>
          <TextInput
            keyboardType="default"
            style={StyLogin.textSenhaInput}
            placeholder={'Senha'}
            placeholderTextColor="#FFF"
            secureTextEntry={hidePass}
            onChangeText={value => setSenha(value)}
          />
          <TouchableOpacity
            style={StyLogin.touch3}
            onPress={() => setHidePass(!hidePass)}>
            {hidePass ? (
              <Ionicons name="eye" color="#FFF" size={15} />
            ) : (
              <Ionicons name="eye-off" color="#FFF" size={15} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={StyLogin.viewEsqSenha}>
        <TouchableOpacity>
          <Text style={StyLogin.text3}>Senha esquecida?</Text>
        </TouchableOpacity>
      </View>
      <View style={StyLogin.view1}>
        <Button title="Conecte-se" onPress={executeClick} />
      </View>
      <View
        style={StyLogin.view2}>
        <View
          style={StyLogin.viewBarra}
        />
        <Text style={StyLogin.text2}>ou</Text>
        <View
          style={StyLogin.viewBarra}
        />
      </View>
      <View
        style={StyLogin.view3}>
        <TouchableOpacity
          style={StyLogin.touch1}>
          <AntDesing name="facebook-square" style={StyLogin.iconFacebook} />
          <Text style={StyLogin.text3}>Entrar com o Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={StyLogin.view4}>
        <View
          style={StyLogin.view5}
        />
        <TouchableOpacity
          onPress={newAccontClick}
          style={StyLogin.touch2}>
          <View style={StyLogin.viewtext}>
            <Text style={StyLogin.text4}>Não tem uma conta?</Text>
            <Text style={StyLogin.text3}>Inscrever-se</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;