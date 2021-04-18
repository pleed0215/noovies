import React from "react";
import { Text, View } from "react-native";
import { StackDefaultScreenProps } from "../../navigations/definitions";

export const SearchScreen: React.FC<StackDefaultScreenProps<"Home">> = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
