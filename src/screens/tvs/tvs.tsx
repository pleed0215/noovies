import React from "react";
import { Text, View } from "react-native";
import { StackDefaultScreenProps } from "../../navigations/definitions";

export const TvsScreen: React.FC<StackDefaultScreenProps<"Home">> = () => {
  return (
    <View>
      <Text>TV</Text>
    </View>
  );
};
