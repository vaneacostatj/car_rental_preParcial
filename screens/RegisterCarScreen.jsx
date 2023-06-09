import { Text, View } from 'react-native';
import { styles } from '../assets/styles/style'
import { Button, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
import { vehiculos } from './CarsScreen'
import { useState } from 'react';


const dbCars = vehiculos

const RegisterCarScreen = ({navigation}) =>{

  const [errorUser, setErrorUser] = useState('')
  const {control, handleSubmit, formState: { errors }, reset} = useForm({
    defaultValues: {
      placa: '', 
      marca: '', 
      estado: 'Disponible',
    }
  })

  const onSubmit = (dataFormCar)=>{ 
    const carData = dbCars.find(car => car.placa === dataFormCar.placa)
 
    if(carData){
      setErrorUser('El vehiculo ya existe') 
    }else{
      //console.log(dataFormCar);
      navigation.navigate('Cars',{dataFormCar})   
      reset() 
    }
  }

  return (
    <View  style={styles.container}>
      <Text style={{fontWeight:'bold', marginBottom:10}}>Formulario de registro de vehiculos</Text>


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
            <Text style={styles.textform}>Marca del vehiculo</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                maxLength:30,
                minLength:3,
                //pattern: /^[a-zA-Z0-9]+$/
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label='Ingrese marca'
                    mode='outlined'
                    style={styles.textFormInput}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="marca"
              />
        </View>
        <View>
          {errors.marca?.type == 'required' && <Text style={{color: 'red'}}>La marca es obligatorio </Text>}
          {errors.marca?.type == 'maxLength' && <Text style={{color: 'red'}}>La marca es de maximo 30 chars </Text>}
          {errors.marca?.type == 'minLength' && <Text style={{color: 'red'}}>La marca es de minimo 3 chars </Text>}
          {/* {errors.marca?.type == 'pattern' && <Text style={{color: 'red'}}> prueba </Text>} */}
        </View>

      </View>
      <Text style={{fontWeight:'bold', marginBottom:10, color:'red'}}>{errorUser}</Text>
      <View>
          <Button style={styles.bottonadd} icon={() => <AntDesign name='car' size={25}/>} mode="contained" onPress={handleSubmit(onSubmit)}>
            Registrarlo
          </Button>
        </View>
    </View>
  )
}

export{
  RegisterCarScreen
}