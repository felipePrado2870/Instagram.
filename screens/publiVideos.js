import React, { useState, useEffect }from 'react';
import {Text, TouchableWithoutFeedback, ActivityIndicator, 
  FlatList, View} from 'react-native';
import Video from 'react-native-video';
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import StyPubliVideos from './styless/styPubliVideos';


function PubliVideoScreen() {
  const [paused1, setPaused1] = useState(false)
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

   const onPlayPausePress = ()=> {
   setPaused1(!paused1)
   }

  useEffect(() => {
    const subscriber = firestore()
      .collection('videoPostagem')
      .onSnapshot(querySnapshot => {
        const users = [];
  
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setUsers(users);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return (<View style={StyPubliVideos.container} ><ActivityIndicator /></View>) ;
  } 
  return (
    <FlatList
    data={users}
    numColumns='3'
    renderItem={({ item }) => (
        <View style={StyPubliVideos.container1}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
            <View style={StyPubliVideos.containerVideo}>
              <Video source={{uri:item.videoPostagem}} 
            style={StyPubliVideos.backgroundVideo}
           resizeMode={'stretch'}
           repeat={true}
           paused={paused1}
          />
           <View style={StyPubliVideos.container2}>
           <Feather name="play" style={StyPubliVideos.icon1}/>
           <Text style={StyPubliVideos.text}>{item.numer1}</Text>
          </View>
         </View>
         </TouchableWithoutFeedback>
        </View>
              )}
              />
  );
}
export default PubliVideoScreen;
