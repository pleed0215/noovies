import { Asset } from "expo-asset";
import { Image } from "react-native";

export const cacheImage = (image: string | number) => {
  if (typeof image === "string") {
    return Image.prefetch(image);
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
};
