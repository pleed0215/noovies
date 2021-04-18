import React from "react";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

// Main Bottom Tab Navigation
export type HomeTabListParam = {
  Home: any;
  Tv: any;
  Search: any;
  Favs: any;
};
export type HomeTabScreenParam<
  Routename extends keyof HomeTabListParam
> = BottomTabScreenProps<HomeTabListParam, Routename>;
export const Tabs = createBottomTabNavigator<HomeTabListParam>();

// Default Stack navigation that all home screen will have.
export type StackDefaultScreenList = {
  Home: any;
  Detail: { id: number } | any;
};

export type StackDefaultScreenProps<
  Routename extends keyof StackDefaultScreenList
> = StackScreenProps<StackDefaultScreenList, Routename>;
export const StackDefault = createStackNavigator<StackDefaultScreenList>();
