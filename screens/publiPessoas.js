import React, {useState, useEffect} from 'react';
import {View, Image,TouchableOpacity, ActivityIndicator, 
  FlatList,} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import StyPubliPessoas from './styless/StyPubliPessoas';

function PubliPessoaScreen() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

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
    return (<View style={StyPubliPessoas.container} ><ActivityIndicator /></View>);
  }  
  return (
    <FlatList
    data={users}
    numColumns='3'
    renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {}}>
                <Image style={StyPubliPessoas.imagPost}
                  source={{ uri: item.fotoPostagem }}
                  resizeMode="stretch"/>
                </TouchableOpacity>
      
            )}
            />
  );
}
export default PubliPessoaScreen;
