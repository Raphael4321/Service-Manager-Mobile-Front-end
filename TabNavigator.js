import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/homepage/homepage";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
