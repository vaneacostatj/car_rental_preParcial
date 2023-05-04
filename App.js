import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTabs } from './screens/HomeTaps'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >

        <Stack.Screen
          name='HomeTabs' 
          component={HomeTabs}
         options={{title:'Renta de Carros'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

