import { Dimensions, StyleSheet, Text, View } from "react-native";
import Logar from "./components/logar/Logar.js";

export default function Inicio() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeBox}>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>Faça Login para utilizar o APP </Text>
      </View>
      <View style={styles.loginBox}>
        <Logar></Logar>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "rgb(244,222,123)",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  welcomeBox: {
    width: width * 0.9,
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBox: {
    width: width * 0.9,
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
});
