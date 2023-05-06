import { Text, View,  } from 'react-native';
import { styles } from '../assets/styles/style'
import Banner from '../assets/components/Banner'
import { Button, TextInput } from 'react-native-paper';
import { TableComponentCar, TableRowComponentCar } from '../assets/components/TableComponent'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

let vehiculos = [
  {placa: 'BBA123', marca: 'Mazda', estado: 'No Disponible'},
  {placa: 'RBA475', marca: 'Mazda', estado: 'Disponible'},
  // {placa: 'VAT-123', marca: 'Chevete', estado: 'Disponible'},
]

const Cars = ({route, navigation}) =>{
  const { nameUser, dataFormCar } = route.params

  if (Object.keys(dataFormCar).length === 0) {
  } else {
    const indice = vehiculos.findIndex(car => car.placa === dataFormCar.placa);
    console.log(indice,'mierdaaaaaaa');
    if (indice > 0){
      console.log(indice,'mk');
      vehiculos[indice].estado = dataFormCar.estado 
    }else{
      console.log(indice,'puta');
      vehiculos.push(dataFormCar)
    }
  }

  const textInit = nameUser ? `Bienvenid@ ${nameUser}, Estos son nuestros vehiculos.` : 'Nuestros vehiculos.'
  return (
    <View style={styles.container}>   

      <Banner></Banner>        
      <View style={[ styles.container, styles.views, {flex: 1}]}>
        <Text style={{fontWeight:'bold', marginBottom:10}}>{textInit} </Text>
      </View>
      <View style={{ width: 300, flex: 10 }}>
        <TableComponentCar></TableComponentCar>
        <TableRowComponentCar data = {vehiculos} ></TableRowComponentCar>
      </View>

      <View style={[styles.viewContainerRows, {width:350, justifyContent:'space-around' }]}>
          <Button 
            style={[styles.bottonadd, {backgroundColor:'#0A39D7'}]}
            icon={() => <MaterialCommunityIcons name="car-2-plus" size={24} color="white" />}
            mode="contained"    
            onPress={()=>{
              navigation.navigate('CarsRegistar')
            }}>  
            Registrar vehiculo.
          </Button>
          <Button style={styles.bottonadd}  icon="account" mode="contained" onPress={()=>{navigation.navigate('RentCar')}}>
            Alquilar
          </Button>
        </View>

    </View>
    
  )
}

export{
  Cars,
  vehiculos
}

