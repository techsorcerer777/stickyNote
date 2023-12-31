import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, NoteScreen } from "../screens";
import { screenNames } from "../constants/screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name={screenNames.Home} component={HomeScreen} />
        <Stack.Screen name={screenNames.Note} component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
