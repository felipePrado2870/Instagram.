import { StyleSheet } from "react-native";

const StyPubliVideos = StyleSheet.create({
    container: {
        width: '100%',
        height: 500,
        backgroundColor:'#000000',
        justifyContent: 'center'
        },
      container1: {
        width: 150,
        height: 300,
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
          width: '100%',
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
  export default StyPubliVideos