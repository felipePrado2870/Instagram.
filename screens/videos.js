import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function VideosScreen({navigation}) {
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
      <Text style={styles.text}>Videos</Text>
    </View>
  );
}
export default VideosScreen;
