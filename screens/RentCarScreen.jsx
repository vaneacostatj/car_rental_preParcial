import { Text, View } from 'react-native';
import { styles } from '../assets/styles/style'
import { Button, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
import { vehiculos } from './CarsScreen'
import { users  } from './HomeScreen'
import { useState } from 'react';

const dbUsers = users
const dbCars = vehiculos

const RentCarScreen = ({navigation}) =>{
  const [errorUser, setErrorUser] = useState('')
  
  const {control, handleSubmit, formState: { errors }, reset} = useForm({
    defaultValues: {
      placa: '', 
      marca: '', 
      estado: 'No Disponible',
      username:''
    }
  })

  const onSubmit = (dataRentCar)=>{ 
    const { estado, placa, username} = dataRentCar
    const userData = dbUsers.find(user => user.username === username)
    const carData = dbCars.find(car => car.placa === placa)
 
    if(userData && carData && carData.estado === 'Disponible'){
      navigation.navigate('Cars',{dataFormCar:{
        placa, 
        marca: carData.marca, 
        estado,
      }})   
      reset() 
    }else{ 
      !userData ? setErrorUser('El usuario no existe') :
       !carData ? setErrorUser('El vehiculo no existe') :
        carData.estado !== 'Disponible' ? setErrorUser('El vehiculo no esta disponible') : 
        setErrorUser('Error inesperado')
    }
  }

  return (
    <View  style={styles.container}>
      <Text style={{fontWeight:'bold', marginBottom:10}}>Formulario de solicitud de renta</Text>


      <View>
        <View style={styles.viewContainerRows}>
          <Text style={styles.textform}>Número de Placa</Text>
          <Controller
              control={control}
              rules={{
              required: true,
              maxLength:7,
              minLength:6,
              pattern:  /^[a-zA-Z0-9]+$/
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label='Ingrese placa'
                  mode='outlined'
                  style={styles.textFormInput}
                  onBlur={onBlur}
                  onChangeText={(val) => onChange(val.toUpperCase())}
                  value={value}
                />
              )}
              name="placa"
            />
        </View>
        <View>
          {errors.placa?.type == 'required' && <Text style={{color: 'red'}}>La placa es obligatorio </Text>}
          {errors.placa?.type == 'maxLength' && <Text style={{color: 'red'}}>La placa es de maximo 7 chars </Text>}
          {errors.placa?.type == 'minLength' && <Text style={{color: 'red'}}>La placa es de minimo 6 chars </Text>}
          {errors.placa?.type == 'pattern' && <Text style={{color: 'red'}}> EL campo solo debe tener letras y números </Text>}
        </View>

        <View style={styles.viewContainerRows}>
            <Text style={styles.textform}>Usuario del arrendatario</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                maxLength:30,
                minLength:3,
                pattern:  /^[a-zA-Z0-9]+$/
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label='Ingrese propietario'
                    mode='outlined'
                    style={styles.textFormInput}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="username"
              />
        </View>
        <View>
          {errors.username?.type == 'required' && <Text style={{color: 'red'}}>El usuario es obligatorio </Text>}
          {errors.username?.type == 'maxLength' && <Text style={{color: 'red'}}>El usuario es de maximo 30 chars </Text>}
          {errors.username?.type == 'minLength' && <Text style={{color: 'red'}}>El usuario es de minimo 3 chars </Text>}
          {errors.username?.type == 'pattern' && <Text style={{color: 'red'}}> EL campo solo debe tener letras y números </Text>}
        </View>
      </View>
      <Text style={{fontWeight:'bold', marginBottom:10, color:'red'}}>{errorUser}</Text>
      <View>
          <Button style={styles.bottonadd} icon={() => <AntDesign name='car' size={25}/>} mode="contained" onPress={handleSubmit(onSubmit)}>
            Reservarlo
          </Button>
        </View>
    </View>
  )
}

export{
  RentCarScreen
}