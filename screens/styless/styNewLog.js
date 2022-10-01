import { StyleSheet} from "react-native"

const StyNewLog = StyleSheet.create ({
  view1: {
    flex: 1,
    backgroundColor: '#000000',
  },
  view2:{
    flexDirection: 'row', marginTop: 30
  },
  view3:{
    flex: 1,
  },
  view4:{
    height: 1,
    width: '100%',
    backgroundColor: '#666',
  },
  view5:{
    flexDirection: 'row',
  },
  text3: {color: '#888', fontSize: 16},
  text4: {marginLeft: 10, color: '#ffffff', fontSize: 16},
  iconPers1: {
    height: 200,
    width: 200,
    borderWidth: 3,
    borderColor: '#ffffff',
    borderRadius: 200,
    alignSelf: 'center',
    marginTop: 70,
    color: '#ffffff',
  },
  iconPers2: {
    marginTop: 60,
    alignSelf: 'center',
    fontSize: 70,
    color: '#ffffff',
  },
  touch2:{
    justifyContent: 'center',
          marginLeft: 100,
          marginTop: 7,
          height: 30,
          width: 190,
  }
})
export default StyNewLog