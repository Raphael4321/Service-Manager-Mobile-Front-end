import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Service from "./screens/service/service";
import TabNavigator from "./TabNavigator";
import Login from "./screens/login/login";
import ServiceDetails from "./screens/service_details/serviceDetails";
import PerfilData from "./screens/perfil_data/perfilData";

const Stack = createNativeStackNavigator();

// home -> Tab navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="menu"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Service"
          component={Service}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ServiceDetails"
          component={ServiceDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PerfilData"
          component={PerfilData}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
