import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagen: {
    width: '100%',
    height: '40%',
    resizeMode: 'stretch',
    marginTop: 0,
    marginBottom: 10,
  },

  bottonadd:{
    marginBottom:10, 
    backgroundColor:'#238913', 
    flexDirection: 'row', 
    justifyContent: 'flex-start'
  }
});

export {styles}