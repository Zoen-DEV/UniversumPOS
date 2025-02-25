import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/auth_context";

import HomeScreen from "../screens/home_screen";
import AuthScreen from "../screens/auth_screen";

const Stack = createNativeStackNavigator();

const PublicRoutes = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Auth" component={AuthScreen} />
  </Stack.Navigator>
);

const PrivateRoutes = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
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
