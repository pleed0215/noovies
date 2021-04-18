import React from "react";
import { TabScreenMovie } from "./movies";
import { TabScreenTvs } from "./tvs";
import { TabScreenSearch } from "./search";
import { TabScreenFavs } from "./favs";
import { Tabs } from "./definitions";

export const HomeNav: React.FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={TabScreenMovie} />
      <Tabs.Screen name="Tv" component={TabScreenTvs} />
      <Tabs.Screen name="Search" component={TabScreenSearch} />
      <Tabs.Screen name="Favs" component={TabScreenFavs} />
    </Tabs.Navigator>
  );
};
