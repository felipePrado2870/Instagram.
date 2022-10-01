import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import StyProile from './styless/styProfile';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Evilicons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PubliFotoScreen from './publiFoto';
import PubliVideoScreen from './publiVideos';
import PubliPessoaScreen from './publiPessoas';

const listaPerfil = require('./dados/segind.json');

function ProfileScreen({navigation}) {

  const [page, setPage] = useState(1);

  const styles = StyleSheet.create({
   icon1:{
    color: page === 1 ? '#fff' : '#666',
    alignSelf: 'center',
    fontSize: 20
    },
    icon2:{
      color: page === 2 ? '#fff' : '#666',
      alignSelf: 'center',
      fontSize: 20
    },
    icon3:{
      color: page === 3 ? '#fff' : '#666',
      alignSelf: 'center',
      fontSize: 20
    },
   viewBarra1:{
    marginTop:3,
    height: page === 1 ? 2 : 1,
    width: '100%',
    backgroundColor: page === 1 ? '#fff' : '#666'
   },
   viewBarra2:{
    marginTop:4,
    height: page === 2 ? 2 : 1,
    width: '100%',
    backgroundColor:  page === 2 ? '#fff' : '#666'
   },
   viewBarra3:{
    marginTop:3,
    height: page === 3 ? 2 : 1,
    width: '100%',
    backgroundColor:  page === 3 ? '#fff' : '#666'
   }
  });

  return (
    <View style={StyProile.scroll}>
      <View style={StyProile.View2}>
        <View style={StyProile.View1}>
          <View style={StyProile.View3}>
            <TouchableOpacity onPress={() => {}}>
                <Text style={StyProile.textTitulo1}>felipeprado03020</Text>
            </TouchableOpacity>
          </View>
          <View style={StyProile.viewIcon1}>
            <TouchableOpacity onPress={() => {}}>
                <Evilicons name="chevron-down" style={StyProile.iconSalv} />
            </TouchableOpacity>
          </View>
          <View style={StyProile.viewIcon2}>
            <TouchableOpacity onPress={() => {}}>
                <Octicons name="diff-added" style={StyProile.iconSalv} />
            </TouchableOpacity>
          </View>
          <View style={StyProile.viewIcon3}>
              <TouchableOpacity onPress={() => {}}>
                  <Ionicons name="menu-outline" style={StyProile.iconSalv1} />
              </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={StyProile.scroll}>
        <View>
          <View style={StyProile.stilee1}>
            <View style={StyProile.stilee2}>
              <View>
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    style={StyProile.imagPerf}
                    source={{uri: listaPerfil.perfil.fotoPerfil}}
                    resizeMode="contain"/>
                </TouchableOpacity>
                <View style={StyProile.stilee3}>
                  <Text style={StyProile.textTitulo2}>{'Felipe Prado'}</Text>
                </View>
              </View>
              <View style={StyProile.stilee3}>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={StyProile.textNumer}>
                    {listaPerfil.perfil.numePubl}
                  </Text>
                  <Text style={StyProile.textTitulo}>
                    {listaPerfil.perfil.tituloPubl}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={StyProile.stilee3}>
                <TouchableOpacity onPress={() => {}}>
                  <View>
                    <Text style={StyProile.textNumer}>
                      {listaPerfil.perfil.numeguidor}
                    </Text>
                    <Text style={StyProile.textTitulo}>
                      {listaPerfil.perfil.tituloSeg}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={StyProile.stilee3}>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={StyProile.textNumer1}>
                    {listaPerfil.perfil.nSeguindo}
                  </Text>
                  <Text style={StyProile.textTitulo}>
                    {listaPerfil.perfil.tituloSeguind}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={StyProile.View4}>
            <View
              style={StyProile.viewTouch1}>
              <TouchableOpacity
                onPress={() => {}}
                style={StyProile.touch1}>
                  <Text style={StyProile.textTitulo3}>Editar perfil</Text>
              </TouchableOpacity>
              <View style={StyProile.viewTouch2}>
                <TouchableOpacity onPress={() => {}} style={StyProile.touch1}>
                    <Ionicons name="person-add-outline" style={StyProile.iconSalv3}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={StyProile.View5}>
            <View>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={StyProile.imagPerf1}
                  source={{uri: listaPerfil.perfil.fotoPerfil}}
                  resizeMode="contain"/>
              </TouchableOpacity>
              <View style={StyProile.stilee2}>
                <Text style={StyProile.textTitulo4}>{'Felipe Prado'}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => {}} style={StyProile.touch2}>
              <Ionicons name="add" style={StyProile.iconSalv4} />
            </TouchableOpacity>
          </View>
          <View style={StyProile.View1}>
            <TouchableOpacity style={StyProile.touch3} onPress={() => setPage(1)}>
                <Ionicons name="apps-outline" style={styles.icon1}></Ionicons>
                <View style={styles.viewBarra1}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={() => setPage(2)}>
                <MaterialCommunityIcons name="movie-outline" style={styles.icon2}/>
                <View style={styles.viewBarra2}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={() => setPage(3)}>
                <Ionicons name="ios-person-circle-outline" style={styles.icon3}/>
                <View style={styles.viewBarra3}/>
            </TouchableOpacity>
          </View>
          <View>
            {page === 1 && <PubliFotoScreen />}
            {page === 2 && <PubliVideoScreen />}
            {page === 3 && <PubliPessoaScreen />}
          </View>
        </View>
      </ScrollView>
    </View>
  )
};
export default ProfileScreen;
