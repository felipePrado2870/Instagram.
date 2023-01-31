import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator, 
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons'
import StyHome from './styless/styHome';
import firestore from '@react-native-firebase/firestore';

const instaLogoIcon = require('../assets/Image-Instagram.png');


function HomeScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }
  const [icon1, setIcon1] = useState(true);
  const [icon2, setIcon2] = useState(true);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  
  const styles = StyleSheet.create({
     iconAmei: {
      color: icon1 ? '#ffffff' : '#ff0000',
      fontSize: 20,
      alignSelf: 'baseline',
      marginTop: 5,
      marginLeft: 5,
    },
  });
  useEffect(() => {
    const subscriber = firestore()
      .collection('UsuariosPostagens')
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
    return (<View style={StyHome.container} ><ActivityIndicator /></View>) ;
  }  
  return (
    <View style={StyHome.scroll1}>
      <View style={StyHome.view1}>

          <Image
            style={StyHome.image1}
            source={instaLogoIcon}
            resizeMode="contain"
          />
          <View style={StyHome.viewIcons}>
            <TouchableOpacity>
          <Octicons name="diff-added" style={StyHome.icon1}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <FontAwesome name="heart-o" style={StyHome.icon1} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Feather name="message-circle" style={StyHome.icon1}/>
          </TouchableOpacity>
          </View>
      </View>
        
        <FlatList
    data={users}
    horizontal
    renderItem={({ item }) => (
    
         <View style={StyHome.stilee2}>
                <TouchableOpacity>
                  <View style={StyHome.view3}>
                    <Image
                      style={StyHome.imagPerf1}
                      source={{
                        uri: item.fotoPerfil,
                      }}
                      resizeMode="contain"
                    />
                    </View>
                   </TouchableOpacity>
              
          </View>
           )}
           />
        
        <FlatList
    data={users}
    renderItem={({ item }) => (
        <View style={StyHome.stilee1}>
                <View style={StyHome.stilee1}>
                  <View style={StyHome.stilee2}>
                    <View style={StyHome.view3}>
                      <TouchableOpacity>
                    <Image
                      style={StyHome.imagPerf2}
                      source={{
                        uri: item.fotoPerfil,
                      }}
                      resizeMode="contain"
                    />
                    </TouchableOpacity>
                     </View> 
                    <View style={StyHome.stilee3}>
                      <TouchableOpacity>
                      <Text style={StyHome.textTitulo}>{item.nome}</Text>
                      <Text style={StyHome.textData}>{item.data}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={StyHome.stilee4}>
                    <TouchableOpacity>
                     <Feather name="more-vertical" style={StyHome.icon2} />
                     </TouchableOpacity>
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
                  <TouchableOpacity>
                  <Text style={StyHome.textComent}>{item.comentario}</Text>
                  </TouchableOpacity>
                </View>
        </View>
          )}
          />
    </View>
  );
}

export default HomeScreen;
