import React from "react";
import { colors } from "./src/utils/colors";
import { SafeAreaView, Text } from "react-native";
import Splash from "./src/screens/Splash";

const App = () => {
  return (
    <SafeAreaView>
        <Splash></Splash>
    </SafeAreaView>
  )
}

export default App;