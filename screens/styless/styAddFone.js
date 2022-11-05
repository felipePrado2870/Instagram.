import { StyleSheet } from "react-native";

const StyAddFone = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
              width: '100%',
      },
      view1:{
        flexDirection: 'row',
        height: 36,
        width: 400,
        marginLeft: 20,
        backgroundColor: '#444',
        marginTop: 30,
        borderRadius: 7,
      },
      view2:{
        marginTop: 5,
        height: 22,
        width: 2,
        backgroundColor: '#333',
      },
      view3:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        height: 40,
        width: '97%',
        marginTop: 20,
      },
      textInput: {
        color: '#ffffff',
        width: 60,
        paddingHorizontal: 15,
      },
      textInput1: {
        color: '#ffffff',
        width: 27,
        marginLeft:10,
      },
      textInput2: {
        color: '#ffffff',
        width: 100,
      },
      textSenhaInput: {
        backgroundColor: '#4682b4',
        borderRadius: 7,
        alignItems: 'center',
        height: 36,
        width: '90%',
        paddingHorizontal: 10,
      },
      text: {color: '#888', fontSize: 13},
      text1: {color: '#ffffff', fontSize: 16},
});
  export default StyAddFone