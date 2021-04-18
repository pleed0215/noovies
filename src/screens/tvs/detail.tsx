import React from "react";
import { View, Text } from "react-native";
import { StackDefaultScreenProps } from "../../navigations/definitions";

export const TvDetail: React.FC<StackDefaultScreenProps<"Detail">> = () => {
  return (
    <View>
      <Text>TV Detail</Text>
    </View>
  );
};
