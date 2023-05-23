import { ScrollView, Dimensions, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import {
  useFonts,
  ShadowsIntoLight_400Regular,
} from "@expo-google-fonts/shadows-into-light";
import { RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono";
import Artigos from "./components/artigos/Artigos";

export default function Main() {
  let [fontsLoaded] = useFonts({
    ShadowsIntoLight_400Regular,
    RobotoMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Get Fit</Text>
        <Text
          style={{
            color: "rgb(244,222,123)",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Seu aplicativo Nº1 para treinos
        </Text>
      </View>
      <ScrollView style={styles.body}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            fontFamily: "RobotoMono_400Regular",
            fontSize: 20,
            marginTop: 5,
          }}
        >
          Treinos Recentes
        </Text>
        <View style={styles.artigosBody}>
          <Artigos style={{ height: "auto", display: "flex" }}></Artigos>
        </View>
      </ScrollView>
    </View>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgb(244,222,123)",
  },
  titulo: {
    fontFamily: "ShadowsIntoLight_400Regular",
    fontSize: 50,
    textAlign: "center",
    color: "rgb(244,222,123)",
  },
  header: {
    backgroundColor: "black",
    width: width,
    display: "flex",
    justifyContent: "center",
  },
  body: {
    width: width,
  },
  tBody: {
    width: width,
    height: height * 0.05,
    backgroundColor: "blue",
  },
  artigosBody: {
    minHeight: height * 0.6,
    width: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
