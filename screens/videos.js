import React, { useState , useEffect }from 'react';
import {StyleSheet, Text,
  TouchableOpacity, View , Image,TouchableWithoutFeedback,ActivityIndicator, 
  FlatList,
  ScrollView} from 'react-native';
import Video from 'react-native-video';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StyVideos from './styless/styVideos';
import firestore from '@react-native-firebase/firestore';

const listaVideos = require('./dados/videos.json')

function VideosScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }
   const [icon1, setIcon1] = useState(true);
    const [text1, setText1] = useState(false)
   const [paused1, setPaused1] = useState(false)
   const [loading, setLoading] = useState(true);
   const [users, setUsers] = useState([]);

   const onPlayPausePress = ()=> {
   setPaused1(!paused1)
   }

   const styles = StyleSheet.create({
    iconAmei: {
      color: icon1 ? '#ffffff' : '#ff0000',
      fontSize: 25,
      alignSelf: 'baseline',
      marginTop: 5,
      alignSelf:'center'
    },
    view1:{
      height: 40,
      width:text1 ? 100 : 70,
      borderColor: '#ffffff',
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: 15,

    }
  });
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
        return (<View style={StyVideos.container} ><ActivityIndicator /></View>) ;
      }  
  return (
    <FlatList
    data={users}
    renderItem={({ item }) => (

    <View style={StyVideos.containerVideo}>
        <TouchableWithoutFeedback onPress={onPlayPausePress}>
          <View style={StyVideos.containerVideo}>
            <Video source={{uri:item.videoPostagem}} 
            style={StyVideos.backgroundVideo}
           resizeMode={'stretch'}
           repeat={true}
           paused={paused1}
          />
          <View style={StyVideos.container1}>
          <TouchableOpacity
           onPress={() => {setIcon1(!icon1)}}>
          <View>
            <FontAwesome name={icon1 ? "heart-o" :"heart"} style={styles.iconAmei} />
            <Text style={StyVideos.text1}>{item.numero1}</Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => {}}>
         <View>
           <Feather name="message-circle" style={StyVideos.iconMens}/>
           <Text style={StyVideos.text1}>{item.numero2}</Text>
         </View>
       </TouchableOpacity>

       </View>
       <View style={StyVideos.view2}>
         <View style={StyVideos.container2}>
           <TouchableOpacity >
                    <Image
                      style={StyVideos.imagPerf1}
                      source={{
                        uri: item.fotoPerfil,
                      }}
                      resizeMode="contain"
                    />
                   </TouchableOpacity>
             <View style={StyVideos.container3}>
              <TouchableOpacity>
           <Text style={StyVideos.text2}>{item.titulo}</Text>
           </TouchableOpacity>
           <View  style={styles.view1}>
            <TouchableOpacity onPress={() => {setText1(!text1)}}>
            {text1 === (false)  && (
            <Text style={StyVideos.text3} >Seguir</Text>
            )}
            {text1 === (true)  && (
            <Text style={StyVideos.text3}>Seguindo</Text>
          )}
           </TouchableOpacity>
           
           </View>
          </View>
         </View>
         <TouchableOpacity onPress={() => {}}>
           <View>
         <Feather name="navigation" style={StyVideos.iconEnvi} />
           </View>
        </TouchableOpacity>
                     </View>
                     <View style={StyVideos.view2}>
                     <View style={StyVideos.container2}>
                     <Text style={StyVideos.text4} >{item.text1}</Text>
                     </View>
                     <TouchableOpacity>
                     <Feather name="more-vertical" style={StyVideos.icon2} />
                     </TouchableOpacity>

                     </View>
                     <View style={StyVideos.view2}>
                     <View style={StyVideos.container2}>
                     <Text style={StyVideos.text5}>{item.text2}</Text>
                     <Text style={StyVideos.text5}>{item.text3}</Text>
                     </View>
           <TouchableOpacity>
                  <View style={StyVideos.view4}>
                    <Image
                      style={StyVideos.imagPerf2}
                      source={{
                        uri: item.fotoPerfil,
                      }}
                      resizeMode="contain"
                    />
                    </View>
                   </TouchableOpacity></View>
       </View></TouchableWithoutFeedback>
    </View>
     )}
     />
  );
}
export default VideosScreen;
