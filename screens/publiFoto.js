import React from 'react';
import {View, Image, StyleSheet,TouchableOpacity,  ScrollView} from 'react-native';

const listaPerfil = require('./dados/segind.json');

function PubliFotoScreen({navigation}) {
  const styles = StyleSheet.create({
    scroll: {
      flex: 1,
      backgroundColor: '#000000',
    },
    stilee2: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 5,
      marginTop: 5,
    },
    imagPost: {
      marginTop: 5,
      width: 140,
      height: 120,
      borderColor: '#000000',
      borderWidth: 3,
    },
  });
  return (
    <View style={styles.scroll}>
      <ScrollView style={styles.scroll}>
        <View>
          <View style={styles.stilee2}>
            {listaPerfil.perfil.postagens.length > 0 &&
              listaPerfil.perfil.postagens.map(item => {
                return (
                  <TouchableOpacity onPress={() => {}}>
                  <Image style={styles.imagPost}
                    source={{ uri: item.imagem }}
                    resizeMode="stretch"/>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default PubliFotoScreen;
