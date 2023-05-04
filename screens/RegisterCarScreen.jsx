import { Text, View } from 'react-native';
import { styles } from '../assets/styles/style'
import { Button, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const RegisterCarScreen = ({navigation}) =>{

  const {control, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      placa: '', 
      marca: '', 
      estado: '',
      usuario:''
    }
  })

  const onSubmit = (dataFormCar)=>{ 
    console.log(dataFormCar);
    navigation.navigate('Cars',{dataFormCar})    
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
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="placa"
            />
        </View>
        <View>
          {errors.placa?.type == 'required' && <Text style={{color: 'red'}}>El placa es obligatorio </Text>}
          {errors.placa?.type == 'maxLength' && <Text style={{color: 'red'}}>El placa es de maximo 30 chars </Text>}
          {errors.placa?.type == 'minLength' && <Text style={{color: 'red'}}>El placa es de minimo 12 chars </Text>}
          {errors.placa?.type == 'pattern' && <Text style={{color: 'red'}}> prueba </Text>}
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
          {errors.marca?.type == 'required' && <Text style={{color: 'red'}}>El marca es obligatorio </Text>}
          {errors.marca?.type == 'maxLength' && <Text style={{color: 'red'}}>El marca es de maximo 30 chars </Text>}
          {errors.marca?.type == 'minLength' && <Text style={{color: 'red'}}>El marca es de minimo 12 chars </Text>}
          {/* {errors.marca?.type == 'pattern' && <Text style={{color: 'red'}}> prueba </Text>} */}
        </View>

        <View style={styles.viewContainerRows}>
            <Text style={styles.textform}>Estado del vehiculo</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                maxLength:7,
                minLength:6,
                pattern:  /^[a-zA-Z]+$/
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label='Ingrese estado'
                    mode='outlined'
                    style={styles.textFormInput}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="estado"
              />
        </View>
        <View>
          {errors.estado?.type == 'required' && <Text style={{color: 'red'}}>El estado es obligatorio </Text>}
          {errors.estado?.type == 'maxLength' && <Text style={{color: 'red'}}>El estado es de maximo 30 chars </Text>}
          {errors.estado?.type == 'minLength' && <Text style={{color: 'red'}}>El estado es de minimo 12 chars </Text>}
          {errors.estado?.type == 'pattern' && <Text style={{color: 'red'}}> prueba </Text>}
        </View>

        <View style={styles.viewContainerRows}>
            <Text style={styles.textform}>Nombre del propietario</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                maxLength:30,
                minLength:3,
                pattern:  /^[a-zA-Z]+$/
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
                name="usuario"
              />
        </View>
        <View>
          {errors.usuario?.type == 'required' && <Text style={{color: 'red'}}>El usuario es obligatorio </Text>}
          {errors.usuario?.type == 'maxLength' && <Text style={{color: 'red'}}>El usuario es de maximo 30 chars </Text>}
          {errors.usuario?.type == 'minLength' && <Text style={{color: 'red'}}>El usuario es de minimo 12 chars </Text>}
          {errors.usuario?.type == 'pattern' && <Text style={{color: 'red'}}> prueba </Text>}
        </View>
      </View>
      <View>
          <Button style={styles.bottonadd} icon="account" mode="contained" onPress={handleSubmit(onSubmit)}>
            Entrar
          </Button>
        </View>
    </View>
  )
}

export{
  RegisterCarScreen
}