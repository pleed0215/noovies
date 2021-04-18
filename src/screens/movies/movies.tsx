import React from "react";
import { Text, View } from "react-native";
import { StackDefaultScreenProps } from "../../navigations/definitions";

export const MoviesScreen: React.FC<StackDefaultScreenProps<"Home">> = () => {
  return (
    <View>
      <Text>Movies</Text>
    </View>
  );
};
