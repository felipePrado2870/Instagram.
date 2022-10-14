import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import StyNewLog from './styless/styNewLog';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import StyAddFone from './styless/styAddFone';
import StyAddEmail from './styless/styAddEmail';
import StyAddSenha from './styless/styAddSenha';
import auth from '@react-native-firebase/auth';

function NewAccontScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }

 const [page, setPage] = useState(1);
 const [numero1, setNumero1] = useState('');
 const [numero2, setNumero2] = useState('');
 const [numero3, setNumero3] = useState('');
 const [email, setEmail] = useState('');
 const [senha1, setSenha1] = useState('');
 const [senha2, setSenha2] = useState('');
 
 const styles = StyleSheet.create({
 text1:{
  color: page === 1 ? '#fff' : '#666',
  alignSelf: 'center',
  fontSize: 20,
},
text2:{
  color: page === 2 ? '#fff' : '#666',
  alignSelf: 'center',
  fontSize: 20,
},
viewBarra1:{
  marginTop: 10,
  height: page === 1 ? 2 : 1,
  width: '100%',
  backgroundColor: page === 1 ? '#fff' : '#666',
},
viewBarra2:{
    height: page === 2 ? 2 : 1,
    width: '100%',
    backgroundColor: page === 2 ? '#fff' : '#666',
    marginTop: 10,
},
viewBarra3:{
  marginTop:page === 2 ? 285 : 230,
  height: 40,
  width: '100%',
  backgroundColor: '#000000',
},
touch2:{
  marginTop:page === 2 ? 430 :480,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6,
  marginLeft:20,
  height: 40,
  width: 400,
  backgroundColor: '#1e90ff',
  position: 'absolute'
}
});

  function click1() {
    navigation.navigate('Login to your app');
  }

 function add1() { 
  if 
  (page === 1 && numero1 > 10 && numero2 > 10 && numero3 > 900000000) 
  {setPage(2)
  console.log('+'+numero1+'('+numero2+')' +numero3)}
  if 
  (page === 2 && email !== '') 
     {setPage(3)
      console.log(email)}
  if 
  (page === 3 && senha1 !== '' && senha2 !== ''  ) 
    if (senha1 !== senha2)
    {Alert.alert('Atenção', 'Suas senhas são diferentes') }
     else 
   {auth().createUserWithEmailAndPassword(email,senha1)
     .then(userCredential =>{
      console.log('user: ',userCredential)
      navigation.navigate('BottomTab')
    })
    .catch(error =>{
      if (error.code === 'auth/email-already-in-use') {
        console.log('email ja existe');
        Alert.alert('Atenção', 'Email ja existe')
      }
      if (error.code === 'auth/invalid-email') {
        console.log('email invalido');
        Alert.alert('Atenção', 'Email invalido')
      } 
    })
  }}

  return (
    <View style={StyNewLog.view1}>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={StyNewLog.iconPers1}>
        <SimpleLineIcons name="user" style={StyNewLog.iconPers2} />
      </View>
      <View style={StyNewLog.view2}>
        <TouchableOpacity style={StyNewLog.view3} onPress={() => setPage(1)}>
          <View>
            <Text style={styles.text1}>
              TELEFONE
            </Text>
            <View
              style={styles.viewBarra1}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={() => setPage(2)}>
          <View>
            <Text
              style={styles.text2}>
              EMAIL
            </Text>
            <View
              style={styles.viewBarra2}
            />
          </View>
        </TouchableOpacity>
      </View>
        {page === 1 && <View style={StyAddFone.container}>
      <View
        style={StyAddFone.view1}>
        <TextInput
          keyboardType="numeric"
          style={StyAddFone.textInput}
          placeholder={'US+1'}
          placeholderTextColor="#888"
          onChangeText={valor => setNumero1(valor)}
          maxLength={2}
        />
        <View
          style={StyAddFone.view2}
        />
        <TextInput
          keyboardType="numeric"
          style={StyAddFone.textInput1}
          placeholder={'DD'}
          placeholderTextColor="#888"
          onChangeText={valor => setNumero2(valor)}
          maxLength={2}
        /><TextInput
        keyboardType="numeric"
        style={StyAddFone.textInput2}
        placeholder={'+ Telefone'}
        placeholderTextColor="#888"
        onChangeText={valor => setNumero3(valor)}
        maxLength={9}
      />
      </View>
      <View
        style={StyAddFone.view3}>
        <Text style={StyAddFone.text}>
          Você poderá receber notificaçõespo SMS para fins de
        </Text>
        <Text style={StyAddFone.text}>segurança e login</Text>
      </View>
    </View>}
        {page === 2 && <View style={StyAddEmail.container}>
      <View
        style={StyAddEmail.vie1}>
        <TextInput
          keyboardType="web-search"
          style={StyAddEmail.textInput1}
          placeholder={'Email'}
          placeholderTextColor="#888"
          onChangeText={value => setEmail(value)}
        />
      </View>
    </View>}
        {page === 3 && <View style={StyAddSenha.container}>
      <View
        style={StyAddSenha.view1}>
        <TextInput
          keyboardType="web-search"
          style={StyAddSenha.textInput1}
          placeholder={'Senha'}
          placeholderTextColor="#888"
          onChangeText={value => setSenha1(value)}
          maxLength={12}
        />
      </View>
      <View
        style={StyAddSenha.view2}>
        <TextInput
          keyboardType="web-search"
          style={StyAddSenha.textInput1}
          placeholder={'Confirme sua senha'}
          placeholderTextColor="#888"
          onChangeText={value => setSenha2(value)}
          maxLength={12}
        />
      </View>
    </View>}
      
      <TouchableOpacity  onPress={add1}
          style={styles.touch2}>
          <Text style={StyNewLog.text4}>Avançar</Text>
        </TouchableOpacity>
      <View
        style={styles.viewBarra3}>
        <View
          style={StyNewLog.view4}
        />
        <TouchableOpacity
          onPress={click1}
          style={StyNewLog.touch2}>
          <View
            style={StyNewLog.view5}>
            <Text style={StyNewLog.text3}>Ja tem uma conta?</Text>
            <Text style={StyNewLog.text4}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default NewAccontScreen;