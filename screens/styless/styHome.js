import { StyleSheet } from "react-native";

const StyHome = StyleSheet.create({
    scroll1: {
        flex: 1,
        backgroundColor: '#000000',
      },
      scroll2: {
        flex: 1,
        flexWrap:'wrap',
        backgroundColor: '#000000',
      },
      container: {
        width: '100%',
        height: '100%',
        backgroundColor:'#000000',
        justifyContent: 'center'
        },
    view1:{
      flexDirection: 'row',
        backgroundColor: '#000', 
        height: 55, 
        width: '100%',
      },
      view2:{
        flexDirection:'row'
      },
      viewIcons:{
       marginLeft: 65,
       flexDirection: 'row',
      },
      textTitulo: {
        color: '#ffffff',
        fontSize: 16,
        alignSelf: 'baseline',
        marginTop: 10,
      },
      textData: {
        color: '#ffffff',
        fontSize: 10,
        alignSelf: 'baseline',
        marginTop: 1,
      },
      textComent: {
        color: '#ffffff',
        fontSize: 10,
        alignSelf: 'center',
        marginTop: 2,
      },
      stilee1: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        borderColor: '#7CA1B4',
        justifyContent: 'center',
      },
      stilee2: {
        flexDirection: 'row',
        height: 80, 
        

      },
      stilee3: {
        marginLeft: 15,
        height: 50,
        width: 150,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
      },
      stilee4: {
       marginLeft:140,
      },
      image1:{
        marginLeft: 10, height: 40, width: 100,marginHorizontal: 120
      },
      view3:{
        width: 53,
        height: 53,
        marginTop: 10,
        marginLeft: 7,
        borderRadius: 80,
        borderColor: `#ff4500`,
        borderWidth: 2,

      },
      imagPerf1: {
        width: 49,
        height: 49,
        borderRadius: 80,
        borderColor: '#000000',
        borderWidth: 3,
      },
      imagPerf2: {
        width: 49,
        height: 49,
        borderRadius: 80,
        borderColor: '#000000',
        borderWidth: 3,
      },
      imagPost: {
        marginTop: 5,
        width: 390,
        height: 300,
        borderColor: '#000000',
        borderWidth: 2,
      },

      iconMens: {
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'baseline',
        marginTop: 5,
        marginLeft: 10,
      },
      iconEnvi: {
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'baseline',
        marginTop: 5,
        marginLeft: 10,
      },
      iconSalv: {
        height: 20,
        width: 20,
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'flex-end',
        marginTop: 5,
      },
      icon1: {
        marginTop: 15,
        color: '#ffffff',
        fontSize: 25,
        height: 30,
        marginLeft: 10,
        width: 30,
      },
      icon2: {
        marginTop: 30,
        color: '#ffffff',
        fontSize: 20,
        height: 20,
        width: 20,
        alignSelf: 'flex-end',
      }
});
  export default StyHome