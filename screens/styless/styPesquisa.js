import { StyleSheet } from "react-native";

const StyPesquisa = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        width: '100%',
      },
      container1: {
        width: '100%',
        height: '100%',
        backgroundColor:'#000000',
        justifyContent: 'center'
        },
      view1:{
        backgroundColor: '#444',
        height: 40,
        width: '97%',
        borderRadius: 15,
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
      },
      view2:{
        marginLeft: 2,
        marginTop: 15,
        width: '97%',
        flexDirection: 'row',
      },  
        view3:{
        width: 60,
        height: 60,
        marginTop: 10,
        marginLeft: 7,
        borderRadius: 80,
        borderColor: `#ff4500`,
        borderWidth: 2,
      },
      viewTouch1:
      {marginTop: 4,
      marginLeft: 10
      },
      viewTouch2:{
      width: '95%',
      },
      viewText1:{
        justifyContent: 'center'
      },
      icon1: {
        height: 20,
        width: 20,
        color: '#ffffff',
        fontSize: 22,
        marginTop: 5,
      },
      text1:{
        color: '#ffffff',
        fontSize: 16,
        marginTop:10,
        marginLeft: 10
      },
      text2:{
        color: '#444',
        fontSize: 15,
        marginLeft: 10
      },
      textInput: {
        height: 40,
        fontSize: 15,
        color: '#ffffff',
        marginLeft:10,
        paddingHorizontal: 10,
      },
      stilee3: {
        width: '50%',
        height: 205,
        marginLeft: 5,
      },
      imagPost1: {
        borderRadius:7,
        marginTop: 5,
        width: '100%',
        height: 200,
        borderColor: '#000000',
        borderWidth: 2,
      },
      scroll: {
        marginTop: 15,
        flex: 1,
        backgroundColor: '#000000',
      },
      stilee2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 3,
        width: '100%',
      },
      imagPerf: {
        width: 56,
        height: 56,
        borderRadius: 80,
        borderColor: '#000000',
        borderWidth: 3,
      },
    
});
  export default StyPesquisa