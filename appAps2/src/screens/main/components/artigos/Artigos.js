import {
  Button,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  useFonts,
  ShadowsIntoLight_400Regular,
} from "@expo-google-fonts/shadows-into-light";
import { RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono";
import Icon from "react-native-vector-icons/AntDesign";

export default function Artigos() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-app-aps2.vercel.app/artigos"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  let [fontsLoaded] = useFonts({
    ShadowsIntoLight_400Regular,
    RobotoMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.artigosWrap}>
      {data.map((item, index) => (
        <View style={styles.artigoBox} key={item.id}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "RobotoMono_400Regular",
              fontSize: 20,
            }}
          >
            {item.titulo}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginLeft: 20 }}>#{item.categoria} </Text>
            <Text style={{ marginRight: 20 }}>
              {item.likes} <Icon name="like1" size={30} color="black" />{" "}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.img }}
              style={{
                width: "70%",
                minHeight: 250,
                maxHeight: 300,
                aspectRatio: 1,
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ textAlign: "center" }}> {item.corpo} </Text>
            <Button onPress={() => navigation.navigate("/artigo/" + item.rota)} style={{ marginTop: 0 }} title="ler mais"></Button>
          </View>
        </View>
      ))}
    </View>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  artigosWrap: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(243, 243, 251, 0.2)",
    width: width * 0.95,
  },
  artigoBox: {
    width: "95%",
    height: height * 0.7,
    marginTop: 30,
    borderBottomStyle: "solid",
    borderTopColor: "black",
    borderWidth: 1.5,
  },
});
