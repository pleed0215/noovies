import React from "react";

import { SearchDetail } from "../screens/search/detail";
import { SearchScreen } from "../screens/search/search";

import { HomeTabScreenParam, StackDefault } from "./definitions";

export const TabScreenSearch: React.FC<HomeTabScreenParam<"Home">> = () => {
  return (
    <StackDefault.Navigator>
      <StackDefault.Screen name="Home" component={SearchScreen} />
      <StackDefault.Screen name="Detail" component={SearchDetail} />
    </StackDefault.Navigator>
  );
};
