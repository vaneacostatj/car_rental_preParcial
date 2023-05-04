import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons, AntDesign } from '@expo/vector-icons' // importar iconos

//commponentes
import { HomeScreen } from './HomeScreen';
import { Cars } from './CarsScreen'
import { RegisterCarScreen } from './RegisterCarScreen'


const Tab = createBottomTabNavigator();

function HomeTabs() {

  return (
    <Tab.Navigator
      initialRouteName='CarsRegistar'
      screenOptions={{
        headerShown: false, // quita el titulo de la ruta donde esta parado
        tabBarActiveTintColor:'black', 
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor:'#B8C9B6' // color de fondo de los botones de tabs
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{ 
        tabBarIcon: ()=>(<MaterialIcons name='home' size={25}/>),
        tabBarStyle: {display: 'none'}
      }} />
      <Tab.Screen name="Cars" component={Cars} options={{ tabBarIcon: ()=>(<AntDesign name='car' size={25}/>) }}/>
      <Tab.Screen name="CarsRegistar" component={RegisterCarScreen} options={{tabBarStyle: {display: 'none'}}} />
      {/* <Tab.Screen name="Contacts" component={Contacts} options={{ tabBarIcon: ()=>(<MaterialIcons name='contacts' size={25}/>) }}/> */}
    </Tab.Navigator>
  );
}

export {HomeTabs};