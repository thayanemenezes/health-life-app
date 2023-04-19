import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName='login'>
      <Stack.Screen name="login" component={Login}></Stack.Screen>
    </Stack.Navigator>
  );
}

