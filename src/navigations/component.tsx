import React from "react";
import { TabScreenMovie } from "./movies";
import { TabScreenTvs } from "./tvs";
import { TabScreenSearch } from "./search";
import { TabScreenFavs } from "./favs";
import { Tabs } from "./definitions";
import { useCustomTheme } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";

export const HomeNav: React.FC = () => {
  const theme = useCustomTheme();
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: theme.background.primary,
          borderTopColor: theme.color.border,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={TabScreenMovie}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "film" : "film-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Tv"
        component={TabScreenTvs}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "tv" : "tv-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={TabScreenSearch}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "md-search" : "md-search-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favs"
        component={TabScreenFavs}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
