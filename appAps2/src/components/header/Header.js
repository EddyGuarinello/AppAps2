import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
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
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
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
});
