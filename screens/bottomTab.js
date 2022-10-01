import * as React from 'react';
import {StyleSheet} from 'react-native';
import Naveg from './bottonNaveg';

function BottomTabScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0000ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return <Naveg />;
}
export default BottomTabScreen;
