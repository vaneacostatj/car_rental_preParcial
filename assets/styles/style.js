import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textform:{
    fontWeight:'bold', 
    marginBottom:10, 
    flex: 1, 
    textAlign: 'right', 
    marginTop:15, 
    marginRight: 10,
    textAlign: 'left', 
    //backgroundColor:'blue'
  },
  
  textFormInput:{
    flex: 2,
    fontSize: 14, 
    width: 100,
    marginTop:10, 
    alignItems: 'right',
    //backgroundColor: 'red'
  },

  viewContainerRows:{
    flexDirection: 'row', 
    alignItems: 'center' 
  },

  imagen: {
    width: '100%',
    height: '40%',
    resizeMode: 'stretch',
    marginTop: 0,
    marginBottom: 10,
  },

  bottonadd:{
    marginTop:10, 
    marginBottom:10, 
    backgroundColor:'#238913', 
    flexDirection: 'row', 
    justifyContent: 'flex-start'
  }
});

export {styles}