import { Text, View,  } from 'react-native';
import { styles } from '../assets/styles/style'
import Banner from '../assets/components/Banner'
import { Button, TextInput } from 'react-native-paper';
import { TableComponentCar, TableRowComponentCar } from '../assets/components/TableComponent'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Cars = ({route, navigation}) =>{
  const { nameUser } = route.params
  console.log(route,'--------> vane');
  return (
    <View style={styles.container}>   

      <Banner></Banner>        
      <View style={[ styles.container, styles.views, {flex: 1}]}>
        <Text style={{fontWeight:'bold', marginBottom:10}}>Bienvenid@ {nameUser}, Estos son nuestros vehiculos. </Text>
      </View>
      <View style={{ width: 300, flex: 10 }}>
        <TableComponentCar></TableComponentCar>
        <TableRowComponentCar></TableRowComponentCar>
      </View>
      <Button 
        style={styles.bottonadd}
        icon={() => <MaterialCommunityIcons name="car-2-plus" size={24} color="white" />}
        mode="contained"    
        onPress={()=>{
          navigation.navigate('Home')
        }}>  
        Registrar vehiculo.
      </Button>
    </View>
  )
}

export{
  Cars
}