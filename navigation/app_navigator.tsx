import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/auth_context";

import HomeScreen from "../screens/home_screen";
import AuthScreen from "../screens/auth_screen";
import TableScreen from "../screens/table_screen";
import MenuScreen from "../screens/menu_screen";
import UsersScreen from "../screens/users_screen";
import ReportsScreen from "../screens/reports_screen";
import SettingsScreen from "../screens/settings_screen";

const Stack = createNativeStackNavigator();

const PublicRoutes = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Auth" component={AuthScreen} />
  </Stack.Navigator>
);

const PrivateRoutes = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Table" component={TableScreen} />
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="Users" component={UsersScreen} />
    <Stack.Screen name="Reports" component={ReportsScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default AppNavigator;
