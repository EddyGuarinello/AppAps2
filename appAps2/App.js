import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Rotas from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="black" translucent={false} />
      <Rotas></Rotas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
