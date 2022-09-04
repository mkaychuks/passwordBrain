import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// local imports
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import NewsDetail from "./screens/NewsDetail";
import UploadPassword from "./screens/UploadPassword";
import MyPasswords from "./screens/MyPasswords";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "#0f5af0",
  },
  headerTintColor: "#fff",
  headerTitleAlign: "center"
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="UploadPassword" component={UploadPassword}/>
        <Stack.Screen name="NewsDetail" component={NewsDetail}/>
        <Stack.Screen name="MyPasswords" component={MyPasswords}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
