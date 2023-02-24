import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from "./src/screens/ListScreen";
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();
  
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="list" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
