import React, {useState, useEffect} from 'react';
import { Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator, 
  FlatList,
} from 'react-native';
import StyPesquisa from './styless/styPesquisa';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import firestore from '@react-native-firebase/firestore';

function PesquisaScreen({navigation}) {

  const [pesquisa, setPesquisa] = useState('');
  const [loading, setLoading] = useState(true);
   const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection('UsuariosPostagens')
      .onSnapshot(querySnapshot => {
        const users = [];
  
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setUsers(users);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return (<View style={StyPesquisa.container1} ><ActivityIndicator /></View>);
  }  
  

   

  return (
   
    <View style={StyPesquisa.container}>
      <View
        style={StyPesquisa.view1}>
        <View style={StyPesquisa.viewTouch1}>
          <TouchableOpacity onPress={() => {}}>
            <View>
              <SimpleLineIcons name="magnifier" style={StyPesquisa.icon1} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={StyPesquisa.viewTouch2}>
          <TextInput
            style={StyPesquisa.textInput}
            onChangeText={valor => setPesquisa(valor)}
            placeholder="Pesquisar"
            placeholderTextColor="#666"></TextInput>
        </View>

      </View> 
      <FlatList
      numColumns='2'
    data={users}
    renderItem={({ item }) => (
        <View style={StyPesquisa.stilee2}>
         {pesquisa === '' &&
         <FlatList
         numColumns='2'
       data={users}
       renderItem={({ item }) => (
                  <View style={StyPesquisa.stilee3}>
                    <TouchableOpacity>
                    <Image style={StyPesquisa.imagPost1}
                    source={{ uri: item.fotoPostagem }}
                    resizeMode="stretch"/>
                    </TouchableOpacity>
                  </View>
                  )}
                  />
          }
          
      {pesquisa !== '' &&
              <TouchableOpacity style={StyPesquisa.view2}>
              <View style={StyPesquisa.view3}>
                  <Image
                    style={StyPesquisa.imagPerf}
                    source={{
                    uri: item.fotoPerfil,
                    }}
                    resizeMode="contain"
                  />
              </View>
              <View style={StyPesquisa.viewText1}>
                <Text style={StyPesquisa.text1}>{item.nomePerfil}</Text>
                <Text style={StyPesquisa.text2}>{item.nome}</Text>
                <Text style={StyPesquisa.text2}>{item.textSeguindo}</Text>
              </View>
              </TouchableOpacity>
              
         }
        </View>)}
              />
    </View>
  );
}
export default PesquisaScreen;
