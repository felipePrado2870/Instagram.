import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function EddtProfileScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Text> Add Profile</Text>
    </View>
  );
}

export default EddtProfileScreen;
