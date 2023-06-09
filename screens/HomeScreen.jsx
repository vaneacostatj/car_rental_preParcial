import { Text, View } from 'react-native';
import { styles } from '../assets/styles/style'
import { TextInput, Button } from 'react-native-paper'
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


let users =[
  {
    username: 'vane1', name: 'vanessa', password: 'abc123'
  },
  {
    username: 'martin2', name: 'martin', password: 'add456'
  }
]

const HomeScreen = ({route={}, navigation}) =>{
  //navigation nos permite movernos entre ventanas
  const {dataForm} = route.params
  const [errorUser, setErrorUser] = useState('')
console.log(dataForm.name,'jam');
  if (dataForm.name) {
    users.push(dataForm)
  } 

  const {control, handleSubmit, formState: { errors }, reset} = useForm({
    defaultValues: {
      username: '',
      password: '',
    }
  })

  const onSubmit = (dataForm)=>{ 
    const userLogin = users.find(user => user.username === dataForm.username && user.password === dataForm.password)
 
    if (userLogin){
      const nameUser = userLogin.name
      console.log(nameUser);
      navigation.navigate('Cars', { nameUser, dataFormCar:{} })
      reset()
    }else{
      setErrorUser('El usuario y/o la contraseña son erroneas')
    }    
  }

  const onSubmitRegister = ()=>{
    navigation.navigate('UserRegister')
    reset()   
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold', marginBottom:10}}>Inicio de session</Text>

      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:15,
         minLength:4,
         pattern: /^[A-Za-z0-9]+$/g
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label='Ingrese el usuario'
            mode='outlined'
            //style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username?.type == 'required' && <Text style={{color: 'red'}}>El nombre de usuario es obligatorio </Text>}
      {errors.username?.type == 'maxLength' && <Text style={{color: 'red'}}>El nombre de usuario es de maximo 15 chars </Text>}
      {errors.username?.type == 'minLength' && <Text style={{color: 'red'}}>El nombre de usuario es de minimo 5 chars </Text>}
      {errors.username?.type == 'pattern' && <Text style={{color: 'red'}}> El usuario solo debe contener letras y números </Text>}


      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:15,
         minLength:6,
         //pattern:  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label='Ingrese la contraseña'
            mode='outlined'
            //style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password?.type == 'required' && <Text style={{color: 'red'}}>El password es obligatorio </Text>}
      {errors.password?.type == 'maxLength' && <Text style={{color: 'red'}}>El password es de maximo 15 chars </Text>}
      {errors.password?.type == 'minLength' && <Text style={{color: 'red'}}>El password es de minimo 6 chars </Text>}
      

      <Text style={{fontWeight:'bold', marginBottom:10, color:'red'}}>{errorUser}</Text>
        <View style={[styles.viewContainerRows, {width:280, justifyContent:'space-around'}]}>
          <Button icon="account" mode="contained" onPress={onSubmitRegister}>
            Registrarse
          </Button>
          <Button style={styles.bottonadd}  icon={()=><Ionicons name="logo-octocat" size={24} color="black" />} mode="contained" onPress={handleSubmit(onSubmit)}>
            Entrar
          </Button>
        </View>

    </View>
  )
}

export {
  HomeScreen,
  users
}