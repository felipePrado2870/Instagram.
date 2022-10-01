import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function PubliPessoaScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontSize: 16,
      marginTop: 10,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Publicação com pessoas</Text>
    </View>
  );
}
export default PubliPessoaScreen;
