import { Text, View } from 'react-native';
import { styles } from '../assets/styles/style'
import { TextInput, Button } from 'react-native-paper'
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';


let users =[
  {
    username: 'vane1', name: 'vanessa', password: 'abc123'
  },
  {
    username: 'martin2', name: 'martin', password: 'add456'
  }
]

const HomeScreen = ({navigation}) =>{
  //navigation nos permite movernos entre ventanas
  const [errorUser, setErrorUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {control, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      username: '',
      password: '',
    }
  })

  const onSubmit = (dataForm)=>{
    const {username, password} = dataForm   
    const userLogin = users.find(user => user.username === username && user.password === password)
    const nameUser = userLogin.name
    if (userLogin){
      console.log(nameUser);
      navigation.navigate('Cars', { nameUser, dataFormCar:{} })
    }else{
      setErrorUser('El usuario y/o la contraseña son erroneas')
    }
    
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold', marginBottom:10}}>Inicio de session</Text>

      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:15,
         minLength:5,
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
      <Button icon="account" mode="contained" onPress={handleSubmit(onSubmit)}>
        Entrar
      </Button>

    </View>
  )
}

export {
  HomeScreen
}