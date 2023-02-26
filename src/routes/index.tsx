import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../pages/home/view';
import DetailView from '../pages/detail/view';

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
          component={DetailView}
        />
      </Navigator>
    </NavigationContainer>
  )
}