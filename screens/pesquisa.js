import React, {useState, useEffect} from 'react';
import { Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import StyPesquisa from './styless/styPesquisa';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

function PesquisaScreen({navigation}) {
  const [resultado, setResultado] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  const listaTeste = [
    {
      nome: 'Bruno',
    },
    {
      nome: 'Suellen',
    },
    {
      nome: 'Pedro',
    },
  ];

  useEffect(() => {}, []);

  useEffect(() => {
    if (pesquisa !== '') {
      const listaFiltrada = listaTeste.filter(x =>
        x.nome.toLowerCase().includes(pesquisa.toLowerCase()),
      );
      setResultado(listaFiltrada);
    } else {
      setResultado([]);
    }
  }, [pesquisa]);

  function buttonPress() {
    navigation.goBack();
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
            placeholder="Digite algo aqui"
            placeholderTextColor="#666"></TextInput>
        </View>
      </View>
      {resultado &&
        resultado.length > 0 &&
        resultado.map(item => {
          return (
            <View>
              <Text style={StyPesquisa.text1}>{item.nome}</Text>
            </View>
          );
        })}
    </View>
  );
}
export default PesquisaScreen;
