import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeNavigatorParamsList } from "../../navigation/navScreens";
import { Home } from "./Home";

const Stack = createStackNavigator<HomeNavigatorParamsList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ title: "" }} name="Home" component={Home} />
    </Stack.Navigator>
  );
};
