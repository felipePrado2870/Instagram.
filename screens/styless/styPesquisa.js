import { StyleSheet } from "react-native";

const StyPesquisa = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
      },
      view1:{
        backgroundColor: '#444',
        height: 47,
        width: '97%',
        borderRadius: 15,
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
      },
      viewTouch1:
      {marginTop: 4,
      marginLeft: 10
      },
      viewTouch2:{
      width: '95%'
      },
      icon1: {
        height: 20,
        width: 20,
        color: '#ffffff',
        fontSize: 22,
        marginTop: 8,
      },
      text1:{
        color: '#fff'
      },
      textInput: {
        height: 35,
        fontSize: 13,
        borderColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 1,
        color: '#ffffff',
        marginTop: 6,
        marginEnd:15,
        marginLeft:10,
        paddingHorizontal: 10,
      }
});
  export default StyPesquisa