import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import {
  useFonts,
  ShadowsIntoLight_400Regular,
} from "@expo-google-fonts/shadows-into-light";
import { RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono";

export default function Main() {
  let [fontsLoaded] = useFonts({
    ShadowsIntoLight_400Regular,
    RobotoMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <></>;
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({});
