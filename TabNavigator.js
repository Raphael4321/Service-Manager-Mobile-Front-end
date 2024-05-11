import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/homepage/homepage";
import { Entypo } from "@expo/vector-icons";
import Perfil from "./screens/perfil/perfil";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" size={18} color="black" />;
          },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={"perfil"}
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="user-alt" size={18} color="black" />;
          },
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
