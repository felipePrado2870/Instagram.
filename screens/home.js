import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import StyHome from './styless/styHome';

const listaPosts = require('./dados/teste.json');
const instaLogoIcon = require('../assets/instagram-name-logo.png');


function HomeScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }
  const [icon1, setIcon1] = useState(true);
  const [icon2, setIcon2] = useState(true);
  
  const styles = StyleSheet.create({
     iconAmei: {
      color: icon1 ? '#ffffff' : '#ff0000',
      fontSize: 20,
      alignSelf: 'baseline',
      marginTop: 5,
      marginLeft: 5,
    }
  });

  return (
    <View style={StyHome.scroll}>
      <View style={StyHome.view1}>
          <Image
            style={StyHome.image1}
            source={instaLogoIcon}
            resizeMode="contain"
          />
      </View>
      <ScrollView style={StyHome.scroll}>
        <View style={StyHome.stilee1}>
          {listaPosts.posts.length === 0 && (
            <Text>Nenhum post para visualizar no momento</Text>
          )}

          {listaPosts.posts.length > 0 &&
            listaPosts.posts.map(item => {
              return (
                <View style={StyHome.stilee1}>
                  <View style={StyHome.stilee2}>
                    <Image
                      style={StyHome.imagPerf}
                      source={{
                        uri: item.fotoPerfil,
                      }}
                      resizeMode="contain"
                    />
                    <View style={StyHome.stilee3}>
                      <Text style={StyHome.textTitulo}>{item.titulo}</Text>
                      <Text style={StyHome.textData}>{item.data}</Text>
                    </View>
                  </View>
                  <Image
                    style={StyHome.imagPost}
                    source={{
                      uri: item.fotoPostagem,
                    }}
                    resizeMode="stretch"
                  />
                  <View
                    style={StyHome.view2}>
                    <TouchableOpacity
                      onPress={() => {setIcon1(!icon1)}}>
                      <View>
                        <FontAwesome name={icon1 ? "heart-o" :"heart"} style={styles.iconAmei} />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                      <View>
                        <Feather
                          name="message-circle"
                          style={StyHome.iconMens}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                      <View>
                        <Feather name="navigation" style={StyHome.iconEnvi} />
                      </View>
                    </TouchableOpacity>
                    <View style={{marginLeft: 284}}>
                      <TouchableOpacity onPress={() => {setIcon2(!icon2)}}>
                        <View>
                          <FontAwesome name={icon2 ? "bookmark-o" : "bookmark"} style={StyHome.iconSalv} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={StyHome.textComent}>{item.descricao}</Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
