import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Flex } from "../components/Flex";

const strings = {
  labels: {
    home: "Home",
    card: "Card",
  },
};

const TabText = ({ route, focused }: { route: string; focused: boolean }) => {
  const color = focused ? "#111" : "#666";
  return (
    <Text style={{ color, width: 80, textAlign: "center" }}>
      {route === "HomeNavigator" && strings.labels.home}
      {route === "CardNavigator" && strings.labels.card}
    </Text>
  );
};

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  // Most of this code is a simplified version of the example here:
  // https://reactnavigation.org/docs/bottom-tab-navigator/
  return (
    <Flex
      justify="center"
      style={{
        padding: 48,
        elevation: 12,
        shadowColor: "rgba(0, 0, 0, 0.12)",
        shadowOffset: { width: 0, height: -8 },
        shadowOpacity: 0.4,
        backgroundColor: "white",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const focused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              params: {},
              merge: true,
            });
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={focused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ marginHorizontal: 4 }}
          >
            <Flex column align={"center"}>
              <TabText focused={focused} route={route.name} />
            </Flex>
          </TouchableOpacity>
        );
      })}
    </Flex>
  );
};
