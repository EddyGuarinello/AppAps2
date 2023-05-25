import {
  Button,
  Image,
  ScrollView,
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
import { useNavigation } from "@react-navigation/native";
import Header from "../../../../components/header/Header";
import { PlayfairDisplay_600SemiBold } from "@expo-google-fonts/playfair-display";
import YoutubePlayer from "react-native-youtube-iframe";

const Artigo = ({ route }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-app-aps2.vercel.app/artigos/${route.params}`
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
    PlayfairDisplay_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView style={styles.content}>
      <Header></Header>
      {data.map((item, index) => (
        <View style={{ display: "flex", alignItems: "center" }} key={item.id}>
          <Text
            style={{
              fontSize: 25,
              marginTop: 20,
              width: width * 0.8,
              textAlign: "center",
              fontFamily: "PlayfairDisplay_600SemiBold",
            }}
          >
            {item.titulo}
          </Text>
          <View style={styles.artBox}>
            <YoutubePlayer
              height={300}
              play={"pause"}
              videoId={"OI9Cq3GFHx0"}
            />
            <Text
              style={{
                fontFamily: "RobotoMono_400Regular",
                textAlign: "center",
              }}
            >
              {item.corpo}
            </Text>
          </View>
          <View style={{ height: height * 0.1 }}>
            <Text
              style={{ marginRight: 20, flexDirection: "row", display: "flex" }}
            >
              {item.likes} <Icon name="like1" size={30} color="black" />{" "}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
export default Artigo;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "rgb(244,222,123)",
  },
  artBox: {
    width: width * 0.95,
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    minHeight: height * 0.7,
  },
});
