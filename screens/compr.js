import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import StyCompr from './styless/styCompr';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Evilicons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const ListaCompras = require('./dados/compas.json')

function ComprScreen({navigation}) {
  const [resultado, setResultado] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [icon2, setIcon2] = useState(true);

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
  }, [pesquisa]);

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
      <ScrollView style={StyCompr.scroll}>
      
        <View style={StyCompr.stilee2}>
        {resultado.length === 0 && ListaCompras.compras.map ( item => {
             return (
                  <View style={StyCompr.stilee3}>
                    <TouchableOpacity>
                    <Image style={StyCompr.imagPost1}
                    source={{ uri: item.foloProduto }}
                    resizeMode="stretch"/> 
                    </TouchableOpacity>
                  </View>
          );
        })} 
        {resultado && resultado.length > 0 &&
           resultado.map(item => {
             return (
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
          );
        })} 
        </View>
        </ScrollView>
    </View>
  );
}
export default ComprScreen;
