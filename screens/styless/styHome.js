import { StyleSheet } from "react-native";

const StyHome = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: '#000000',
      },
    view1:{
        backgroundColor: '#000', 
        height: 55, 
        width: '100%'
      },
      view2:{
        flexDirection: 'row'
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
      },
      stilee3: {
        flex: 1,
        marginLeft: 15,
        flexDirection: 'column',
        alignSelf: 'center',
        borderColor: '#7CA1B4',
        justifyContent: 'center',
      },
      image1:{
        marginLeft: 10, height: 60, width: 100
      },
      imagPerf: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginLeft: 7,
        borderRadius: 80,
        borderColor: '#000000',
        borderWidth: 2,
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
      }
});
  export default StyHome