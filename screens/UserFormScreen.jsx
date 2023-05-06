import { Text, View } from 'react-native';
import { styles } from '../assets/styles/style'
import { Button, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { users  } from './HomeScreen'
import { Ionicons } from '@expo/vector-icons';
const dbUsers = users

const UserFormScreen = ({ navigation }) => {

  const [errorUser, setErrorUser] = useState('')

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      username: '',
      name: '',
      password: ''
    }
  })

  const onSubmit = (dataForm) => {
    const {username}=dataForm
    const userRegister = dbUsers.find(user => user.username === username)

    if (userRegister){
      console.log('existe');
      setErrorUser('El usuario ya existe, ingrese otro')      
    }else{
      navigation.navigate('Home', { dataForm })
      reset()
    }
  }

  const onSubmitInicio = ()=>{
    navigation.navigate('Home')
    reset()   
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Formulario de registro para Usuarios</Text>
      <View style={{width:280, justifyContent:'space-around'}}>
        <View style={styles.viewContainerRows}>
          <Text style={styles.textform}>Username</Text>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 30,
              minLength: 4,
              pattern: /^[a-zA-Z0-9]+$/
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Nombre de usuario'
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
          {errors.username?.type == 'required' && <Text style={{ color: 'red' }}>El nombre de usuario es obligatorio </Text>}
          {errors.username?.type == 'maxLength' && <Text style={{ color: 'red' }}>El nombre de usuario es de maximo 30 chars </Text>}
          {errors.username?.type == 'minLength' && <Text style={{ color: 'red' }}>El nombre de usuario es de minimo 4 chars </Text>}
          {errors.username?.type == 'pattern' && <Text style={{ color: 'red' }}> EL campo solo debe tener letras y números </Text>}
        </View>

        <View style={styles.viewContainerRows}>
          <Text style={styles.textform}>Nombre</Text>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 20,
              minLength: 4,
              pattern: /^[a-zA-Z]+$/
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Ingrese su nombre'
                mode='outlined'
                style={styles.textFormInput}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
        </View>
        <View>
          {errors.name?.type == 'required' && <Text style={{ color: 'red' }}>El nombre es obligatorio </Text>}
          {errors.name?.type == 'maxLength' && <Text style={{ color: 'red' }}>El nombre es de maximo 20 chars </Text>}
          {errors.name?.type == 'minLength' && <Text style={{ color: 'red' }}>El nombre es de minimo 4 chars </Text>}
          {errors.name?.type == 'pattern' && <Text style={{ color: 'red' }}> EL campo solo debe tener letras </Text>}
        </View>

        <View style={styles.viewContainerRows}>
          <Text style={styles.textform}>Contraseña</Text>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 30,
              minLength: 4,
              pattern: /^[a-zA-Z0-9]+$/
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Ingrese contraseña'
                mode='outlined'
                style={styles.textFormInput}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
        </View>
        <View>
          {errors.password?.type == 'required' && <Text style={{ color: 'red' }}>La contraseña es obligatorio </Text>}
          {errors.password?.type == 'maxLength' && <Text style={{ color: 'red' }}>La contraseña es de maximo 30 chars </Text>}
          {errors.password?.type == 'minLength' && <Text style={{ color: 'red' }}>La contraseña es de minimo 4 chars </Text>}
          {errors.password?.type == 'pattern' && <Text style={{ color: 'red' }}> EL campo solo debe tener letras y números </Text>}
        </View>
      </View>

      <Text style={{fontWeight:'bold', marginBottom:10, color:'red'}}>{errorUser}</Text>
      <View>
        <Button
          style={styles.bottonadd}
          icon='account'
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        >
          Registrarse
        </Button>

        <Button icon={()=><Ionicons name="logo-octocat" size={24} color="black" />} mode="contained" onPress={onSubmitInicio}>
          Volver atras
        </Button>
      </View>

    </View>
  )
}

export {
  UserFormScreen
}