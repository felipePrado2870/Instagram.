import React ,{ useState } from 'react';
import {StyleSheet, Text, View,TextInput, Button, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function EddtProfileScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }
   const [nomePerfil, setnomePerfil] = useState('');
   const [nPubli, setNPubli] = useState('');
   const [nSeguidor, setNSeguidor] = useState('');
   const [nSeguindo, setNSeguindo] = useState('');
   const [data , setData] = useState('');
   const [hora, setHora] = useState('');
   const [comentario, setComentario] = useState('');
   const [nome, setNome] = useState('');

    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1:{
      
      color: '#ffffff',
      fontSize: 18,
      alignSelf: 'baseline',
      marginTop: 10,
      alignSelf: 'center'
    },
  });

 function  addDados(){

  firestore()
  .collection('videoPostagem')
  .add({
    titulo: "@R.C.9898",
        text1: "#love #bomdia #fashion",
        text2:"Rosa Linn",
        text3:"-  SNAP",
        numero1: "120",
         numero2: "50",
     fotoPerfil: "https://firebasestorage.googleapis.com/v0/b/instagram-b3f36.appspot.com/o/UsuariosPostagens%2FRonaldoCalos%2FRonaldo%20Calos%20Perfil.jpg?alt=media&token=9974bbd5-cfd4-4b31-8012-561fdb270cc8",
     videoPostagem: "https://firebasestorage.googleapis.com/v0/b/instagram-b3f36.appspot.com/o/UsuariosPostagens%2FRonaldoCalos%2FRonaldo%20Calos%20Video.mp4?alt=media&token=2bedb67a-509e-4898-8f18-a3440301a478",
    create_at: firestore.FieldValue.serverTimestamp(),
  })
  .then(() => Alert.alert ("Chamedo","Chamado aberto com sucesso!"))
  .catch((error) => console.log(error))
 }

  return (
    <View style={styles.container}>
     
      <Button  title="Enviar chamado" onPress={addDados}></Button>
    </View>
  );
}

export default EddtProfileScreen;
