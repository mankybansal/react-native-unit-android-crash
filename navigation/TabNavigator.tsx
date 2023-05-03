import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabNavigatorParamsList } from "./navScreens";
import { TabBar } from "./TabBar";
import { CardNavigator } from "../screens/card/CardNavigator";
import { HomeNavigator } from "../screens/home/HomeNavigator";

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

export const TabNavigator = () => {
  const { Navigator, Screen } = Tab;

  return (
    <>
      <Navigator
        tabBar={(props) => <TabBar {...props} />}
        initialRouteName="HomeNavigator"
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        <Screen name="HomeNavigator" component={HomeNavigator} />
        <Screen name="CardNavigator" component={CardNavigator} />
      </Navigator>
    </>
  );
};
