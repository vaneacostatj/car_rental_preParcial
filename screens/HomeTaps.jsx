import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons' // importar iconos



//commponentes
import { HomeScreen } from './HomeScreen';
import { Cars } from './CarsScreen'
import { RegisterCarScreen } from './RegisterCarScreen'
import {UserFormScreen} from './UserFormScreen'
import {RentCarScreen} from './RentCarScreen'


const Tab = createBottomTabNavigator();

function HomeTabs() {

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false, // quita el titulo de la ruta donde esta parado
        tabBarActiveTintColor:'black', 
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor:'#B8C9B6' // color de fondo de los botones de tabs
      }}
    >

      <Tab.Screen name="UserRegister" component={UserFormScreen} options={{tabBarStyle: {display: 'none'}}}/>
      <Tab.Screen name="Cars" component={Cars} 
      options={{ tabBarIcon: ()=>(<AntDesign name='car' size={25}/>) }}
      initialParams={{ dataFormCar: {} }} />
      <Tab.Screen name="CarsRegistar" component={RegisterCarScreen} options={{ tabBarIcon: ()=>(<MaterialCommunityIcons name="car-2-plus" size={24} color="black" />) }}/>
      <Tab.Screen name="RentCar" component={RentCarScreen} options={{ tabBarIcon: ()=>(<MaterialIcons name="car-rental" size={24} color="black" />) }}/>
      <Tab.Screen name="Home" component={HomeScreen}
      initialParams={{ dataForm: {} }} 
      options={{tabBarStyle: {display: 'none'}, tabBarIcon: ()=>(<Entypo name="log-out" size={24} color="black" />)}} />
    
    </Tab.Navigator>
  );
}

export {HomeTabs};