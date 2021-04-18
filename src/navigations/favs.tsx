import React from "react";
import { FavsDetail } from "../screens/favs/detail";
import { FavsScreen } from "../screens/favs/favs";
import { HomeTabScreenParam, StackDefault } from "./definitions";

export const TabScreenFavs: React.FC<HomeTabScreenParam<"Home">> = () => {
  return (
    <StackDefault.Navigator>
      <StackDefault.Screen name="Home" component={FavsScreen} />
      <StackDefault.Screen name="Detail" component={FavsDetail} />
    </StackDefault.Navigator>
  );
};
