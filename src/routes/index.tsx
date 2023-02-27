import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../pages/home/view';
import DetailView from '../pages/detail/view';
import { COLORS } from '../common/colors';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name='home'
          component={HomeView}
          options={{headerShown:false}}
        />
        <Screen
          name='detail'
          options={{title:'Detalhes do endereço',headerStyle:{backgroundColor:COLORS.secondary},headerTintColor:COLORS.white}}
          component={DetailView}
        />
      </Navigator>
    </NavigationContainer>
  )
}