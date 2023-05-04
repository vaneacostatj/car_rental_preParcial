import { Text, View,  } from 'react-native';
import { styles } from '../assets/styles/style'
import Banner from '../assets/components/Banner'
import { Button, TextInput } from 'react-native-paper';
import { TableComponentCar, TableRowComponentCar } from '../assets/components/TableComponent'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Cars = ({route, navigation}) =>{
  const { nameUser, dataFormCar } = route.params
  const textInit = nameUser ? `Bienvenid@ ${nameUser}, Estos son nuestros vehiculos.` : 'Nuestros vehiculos.'
  return (
    <View style={styles.container}>   

      <Banner></Banner>        
      <View style={[ styles.container, styles.views, {flex: 1}]}>
        <Text style={{fontWeight:'bold', marginBottom:10}}>{textInit} </Text>
      </View>
      <View style={{ width: 300, flex: 10 }}>
        <TableComponentCar car={dataFormCar}></TableComponentCar>
        <TableRowComponentCar></TableRowComponentCar>
      </View>
      <Button 
        style={styles.bottonadd}
        icon={() => <MaterialCommunityIcons name="car-2-plus" size={24} color="white" />}
        mode="contained"    
        onPress={()=>{
          navigation.navigate('CarsRegistar')
        }}>  
        Registrar vehiculo.
      </Button>
    </View>
  )
}

export{
  Cars
}