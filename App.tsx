import {
  UNBottomSheetComponent,
  UNEnvironment,
  UnitSDK,
} from "react-native-unit-components";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { RootNavigator } from "./navigation/RootNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    UnitSDK.init(UNEnvironment.sandbox);
    SplashScreen.hideAsync();
  }, []);

  return (
    <>
      <RootNavigator />
      <UNBottomSheetComponent />
    </>
  );
}
