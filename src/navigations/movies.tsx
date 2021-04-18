import React from "react";
import { MovieDetail } from "../screens/movies/movie.detail";
import { MoviesScreen } from "../screens/movies/movies";

import { HomeTabScreenParam, StackDefault } from "./definitions";

export const TabScreenMovie: React.FC<HomeTabScreenParam<"Home">> = () => {
  return (
    <StackDefault.Navigator>
      <StackDefault.Screen
        name="Home"
        component={MoviesScreen}
        options={{ headerTitle: "Movies" }}
      />
      <StackDefault.Screen name="Detail" component={MovieDetail} />
    </StackDefault.Navigator>
  );
};
