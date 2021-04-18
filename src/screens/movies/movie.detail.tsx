import React from "react";
import { View, Text } from "react-native";
import { StackDefaultScreenProps } from "../../navigations/definitions";

export const MovieDetail: React.FC<StackDefaultScreenProps<"Detail">> = () => {
  return (
    <View>
      <Text>Movie Detail</Text>
    </View>
  );
};
