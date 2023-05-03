import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Card } from "./Card";
import { CardNavigatorParamsList } from "../../navigation/navScreens";

const Stack = createStackNavigator<CardNavigatorParamsList>();

export const CardNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ title: "" }} name="Card" component={Card} />
    </Stack.Navigator>
  );
};
