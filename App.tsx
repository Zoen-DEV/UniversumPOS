import { AuthProvider } from "./context/auth_context";
import AppNavigator from "./navigation/app_navigator";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
