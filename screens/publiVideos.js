import React, { useState }from 'react';
import {StyleSheet, Text, ScrollView, TouchableWithoutFeedback, View} from 'react-native';
import Video from 'react-native-video';
import Feather from 'react-native-vector-icons/Feather';

const listaPubliVideo = require('./dados/publiVideos .json')

function PubliVideoScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }
  const [paused1, setPaused1] = useState(false)

   const onPlayPausePress = ()=> {
   setPaused1(!paused1)
   }
  const styles = StyleSheet.create({
    container: {
    width: '100%',
    height: '100%',
    },
    container1: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      },
    container2:{
     marginTop:260,
     width: 140,
     height: 40,
     flexDirection: 'row',
    },
    containerVideo: {
      marginTop:5,
      marginLeft: 5,
        width: '32%',
        height: 300,
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    text: {
      color: '#ffffff',
      fontSize: 16,
      alignSelf: 'center',
      marginLeft: 10,
    },
    icon1: {
      color: '#ffffff',
      fontSize: 13,
      alignSelf: 'center',
      marginLeft: 10,
      
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container1}>
        {listaPubliVideo.postagensVideos.length > 0 && listaPubliVideo.postagensVideos.map(item=>{
          return(
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
            <View style={styles.containerVideo}>
              <Video source={{uri:item.videoPostagem}} 
            style={styles.backgroundVideo}
           resizeMode={'stretch'}
           repeat={true}
           paused={paused1}
          />
           <View style={styles.container2}>
           <Feather name="play" style={styles.icon1}/>
           <Text style={styles.text}>{item.numer1}</Text>
          </View>
         </View>
         </TouchableWithoutFeedback>
          )
        })}
        </View>
      </ScrollView>
    </View>
  );
}
export default PubliVideoScreen;
