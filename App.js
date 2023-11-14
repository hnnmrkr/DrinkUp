import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home";
import PowerHour from "./src/screens/PowerHour";
import Trivia from "./src/screens/Trivia";
import SpinBottle from "./src/screens/SpinBottle";

import SpinBottleGame from "./src/screens/SpinBottle/Game";

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
      <Stack.Screen
        name="Trivia"
        component={Trivia}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SpinTheBottle"
        component={SpinTheBottleStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const SpinTheBottleStack = () => {
  return (
    <Stack.Navigator initialRouteName="SpinTheBottleSplash">
      <Stack.Screen
        name="SpinTheBottleSplash"
        component={SpinBottle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SpinTheBottleGame"
        component={SpinBottleGame}
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