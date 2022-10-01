import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import StyNewLog from './styless/styNewLog'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AddEmailScreen from './addEmail';
import AddFoneScreen from './addFone';
import AddSenhaScreen from './addSenha';

function NewAccontScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }

 const [page, setPage] = useState(1);
 
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
  marginTop:page === 2 ? 40 : 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6,
  marginLeft:20,
  height: 40,
  width: '85%',
  backgroundColor: '#1e90ff',
}
});

  function click1() {
    navigation.navigate('Login to your app');
  }

 function add1() { 
  if 
  (page === '' || page === 0 || page === 1) 
  {setPage(2)}
  if 
  (page === 2) 
  {setPage(3) || Alert.alert('Email valido', 'Adicione sua senha')}
  if 
  (page === 3) 
    {navigation.navigate('BottomTab');}
  }

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
        {page === 1 && <AddFoneScreen />}
        {page === 2 && <AddEmailScreen />}
        {page === 3 && <AddSenhaScreen />}
      
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