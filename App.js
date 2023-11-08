import React from "react";
import { colors } from "./src/utils/colors";
import { SafeAreaView, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import PowerHour from "./src/screens/PowerHour";

const Stack = createNativeStackNavigator()

const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PowerHour"
        component={PowerHour}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreenStack} options={{headerShown: false}}/>
  </Stack.Navigator>
</NavigationContainer>
  )
}

export default App;