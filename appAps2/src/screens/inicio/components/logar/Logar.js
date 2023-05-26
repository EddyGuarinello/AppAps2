import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono";
import {
  useFonts,
  ShadowsIntoLight_400Regular,
} from "@expo-google-fonts/shadows-into-light";

export default function Logar() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleLinkPress = () => {
    navigation.navigate("Register");
  };
  let [fontsLoaded] = useFonts({
    ShadowsIntoLight_400Regular,
    RobotoMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  function Login() {
    if (email === "" || senha === "") {
      alert("Campo(s) não preenchido(s)");
      return;
    }
    try {
      fetch("https://api-get-fit.vercel.app/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: senha }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 400 || response.status === 401) {
            alert("Usuário ou senha incorretos.");
            throw new Error("Usuário ou senha incorretos.");
          }
          return response.json();
        })
        .then((data) => {
          alert("Logado com sucesso!");
          navigation.navigate("Main");
        });
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={(senha) => setSenha(senha)}
      />
      <Button title="Logar" onPress={Login}></Button>
      <Text style={{ marginTop: 5 }}>Ainda não tem uma conta? </Text>
      <TouchableOpacity onPress={handleLinkPress}>
        <Text
          style={{
            fontFamily: "RobotoMono_400Regular",
            color: "blue",
            fontWeight: "bold",
          }}
        >
          REGISTRE-SE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(244,222,123)",
  },
  input: {
    width: width * 0.5,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    textAlign: "center",
    marginBottom: 10,
  },
});
