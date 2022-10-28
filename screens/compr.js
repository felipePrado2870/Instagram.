import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  ScrollView, 
  ActivityIndicator, 
  FlatList,
} from 'react-native';
import StyCompr from './styless/styCompr';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import firestore from '@react-native-firebase/firestore';

const ListaCompras = require('./dados/compas.json')

function ComprScreen({navigation}) {
  const [resultado, setResultado] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [icon2, setIcon2] = useState(true);
  const [loading, setLoading] = useState(true);
   const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (pesquisa !== '') {
      const listaFiltrada = ListaCompras.compras.filter(x =>
        x.titulo.toLowerCase().includes(pesquisa.toLowerCase()),
      );
      setResultado(listaFiltrada);
    } else {
      setResultado([]);
    }
  },
   [pesquisa]);
  useEffect(() => {
    const subscriber = firestore()
      .collection('Compras')
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
    return <ActivityIndicator />;
  }  

  return (
    <View style={StyCompr.container}>
      <View
        style={StyCompr.view3}>
        <View style={StyCompr.viewTouch3}>
          <TouchableOpacity onPress={() => {}}>
              <SimpleLineIcons name="magnifier" style={StyCompr.icon1} />
          </TouchableOpacity>
        </View>
        <View style={StyCompr.viewText1}>
          <TextInput
            style={StyCompr.textInput}
            onChangeText={valor => setPesquisa(valor)}
            placeholder="Pesquisar"
            placeholderTextColor="#666"></TextInput>
        </View>
      </View>
      <FlatList
      numColumns='2'
    data={users}
    renderItem={({ item }) => (
        <View style={StyCompr.stilee2}>
        {resultado.length === 0 &&
                  <View style={StyCompr.stilee3}>
                    <TouchableOpacity>
                    <Image style={StyCompr.imagPost1}
                    source={{ uri: item.foloProduto }}
                    resizeMode="stretch"/> 
                    </TouchableOpacity>
                  </View>
         } 
        {resultado && resultado.length > 0 &&
                  <View style={StyCompr.stilee4}>
                    <TouchableOpacity>
                    <Image style={StyCompr.imagPost2}
                    source={{ uri: item.foloProduto }}
                    resizeMode="stretch"/></TouchableOpacity>
                      <View style={StyCompr.view2}>
                        <View style={StyCompr.view5}>
                          <Text style={StyCompr.text2}>{item.tituloDescr}</Text>
                        </View>
                        <TouchableOpacity onPress={() => {setIcon2(!icon2)}}>
                          <FontAwesome name={icon2 ? "bookmark-o" : "bookmark"} style={StyCompr.icon2} />
                        </TouchableOpacity> 
                      </View>
                    <Text style={StyCompr.text3}>{item.tituloPubl}</Text>
                     <View style={StyCompr.view2}>
                       <Text style={StyCompr.text4}>{item.moeda}</Text>
                       <Text style={StyCompr.text5}>{item.valor2}</Text>
                       <Text style={StyCompr.text6}>{item.moeda}</Text>
                       <Text style={StyCompr.text7}>{item.valor1}</Text>
                    </View>
                  </View>
         } 
        </View>
          )}
          />
    </View>
  );
}
export default ComprScreen;
