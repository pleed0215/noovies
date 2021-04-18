import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { cacheImage } from "./utils";
import { NavigationContainer } from "@react-navigation/native";
import { HomeNav } from "./src/navigations/component";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    try {
      const fontsToLoad = [Ionicons.font];
      const imagesToLoad: Array<string | number> = [
        require("./assets/pngegg.png"),
        require("./assets/background.jpg"),
        "https://images.unsplash.com/photo-1486693326701-1ea88c6e2af3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ];
      const cacheFonts = fontsToLoad.map((font) => Font.loadAsync(font));
      const cacheImages = imagesToLoad.map((image) => cacheImage(image));

      await Promise.all<any>([...cacheImages, ...cacheFonts]);
    } catch (e) {
      console.log(e.message);
    }
  };

  return isReady ? (
    <NavigationContainer>
      <HomeNav />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
}
