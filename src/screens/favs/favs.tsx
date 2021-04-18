import React from "react";
import { Text, View } from "react-native";
import { StackDefaultScreenProps } from "../../navigations/definitions";

export const FavsScreen: React.FC<StackDefaultScreenProps<"Home">> = () => {
  return (
    <View>
      <Text>Favs</Text>
    </View>
  );
};
