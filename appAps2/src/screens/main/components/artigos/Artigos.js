import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import {
  useFonts,
  ShadowsIntoLight_400Regular,
} from "@expo-google-fonts/shadows-into-light";
import { RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono";

export default function Artigos() {
  const [artigos, setArtigos] = useState([]);
  useEffect(() => {
    function obterDadosDaApi() {
      fetch("http://localhost:5000/artigos")
        .then(response => response.json())
        .then(data => {
          setArtigos(data);
        })    
    }
    obterDadosDaApi();
  }, []);

  let [fontsLoaded] = useFonts({
    ShadowsIntoLight_400Regular,
    RobotoMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return( 
  <View style={styles.artigosWrap}>
    <View style={styles.artigoBox}><Text>Ola</Text></View>
    <View style={styles.artigoBox}><Text>Ola</Text></View>
  </View>
 
  )
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  artigosWrap: {
    marginTop:20,
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(243, 243, 251, 0.2)",
    width: width*0.9,
  },
  artigoBox:{
    width: "90%",
    height: "70%",
    backgroundColor: "rgba(243, 243, 251, 1)",
    marginTop: 50
  }
});
