import { TabNavigator } from "./TabNavigator";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { TabNavigatorParamsList } from "./navScreens";
import { DefaultTheme } from "../theme";

type RootNavigatorParamsList = {
  TabsNavigator: NavigatorScreenParams<TabNavigatorParamsList>;
};

export const ReactNavigationDefaultTheme = {
  dark: false,
  colors: {
    primary: DefaultTheme.colors.brand.primary,
    background: DefaultTheme.colors.background.secondary,
    card: DefaultTheme.colors.background.secondary,
    text: DefaultTheme.colors.typography.primary,
    textSubtle: DefaultTheme.colors.typography.secondary,
    border: DefaultTheme.colors.background.primary,
    notification: DefaultTheme.colors.contextual.critical.primary,
  },
};

const Switch = createStackNavigator<RootNavigatorParamsList>();
export const RootNavigator = () => {
  const screens = (
    <>
      <Switch.Screen
        name="TabsNavigator"
        component={TabNavigator}
        options={{
          animationEnabled: false,
          headerTitle: "Back",
        }}
      />
    </>
  );

  return (
    <NavigationContainer theme={ReactNavigationDefaultTheme}>
      <Switch.Navigator
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        {screens}
      </Switch.Navigator>
    </NavigationContainer>
  );
};
