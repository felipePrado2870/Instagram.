import React, {useState, useEffect} from 'react';
import { Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import StyPesquisa from './styless/styPesquisa';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const listaPerquisa = require ('./dados/pesquisa.json')

function PesquisaScreen({navigation}) {

  const [resultado, setResultado] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {}, []);

  useEffect(() => {
    if (pesquisa !== '') {
      const listaFiltrada = listaPerquisa.Pesquisas.filter(x =>
        x.titulo.toLowerCase().includes(pesquisa.toLowerCase()),
      );
      setResultado(listaFiltrada);
    } else {
      setResultado([]);
    }
  }, [pesquisa]);


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
      <ScrollView style={StyPesquisa.scroll}>
        <View style={StyPesquisa.stilee2}>
         {resultado.length === 0 && listaPerquisa.Pesquisas.map(item => {
             return (
                  <View style={StyPesquisa.stilee3}>
                    <TouchableOpacity>
                    <Image style={StyPesquisa.imagPost1}
                    source={{ uri: item.fotoPostagem }}
                    resizeMode="stretch"/>
                    </TouchableOpacity>
                  </View>
          );
        })}
      {resultado.length > 0 &&
        resultado.map(item => {
          return (
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
                <Text style={StyPesquisa.text1}>{item.titulo}</Text>
                <Text style={StyPesquisa.text2}>{item.nome}</Text>
                <Text style={StyPesquisa.text2}>{item.textSeguindo}</Text>
              </View>
              </TouchableOpacity>
          );
        })}
        </View>
        </ScrollView>
    </View>
  );
}
export default PesquisaScreen;
