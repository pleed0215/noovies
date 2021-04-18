import React from "react";
import { TvsScreen } from "../screens/tvs/tvs";
import { TvDetail } from "../screens/tvs/detail";

import { HomeTabScreenParam, StackDefault } from "./definitions";

export const TabScreenTvs: React.FC<HomeTabScreenParam<"Home">> = () => {
  return (
    <StackDefault.Navigator>
      <StackDefault.Screen name="Home" component={TvsScreen} />
      <StackDefault.Screen name="Detail" component={TvDetail} />
    </StackDefault.Navigator>
  );
};
