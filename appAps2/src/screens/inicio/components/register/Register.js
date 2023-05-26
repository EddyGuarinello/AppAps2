import React, { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function Register() {
  const [nome, setNome] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const navigation = useNavigation();
  function registrar() {
    if (nome === "" || sobrenome === "" || useremail === "" || senha === "") {
      alert("Campo(s) não preenchido(s)");
      return;
    }
    fetch("https://api-get-fit.vercel.app/register", {
      method: "POST",
      body: JSON.stringify({
        email: useremail,
        sobrenome: sobrenome,
        password: senha,
        nome: nome,
        id: uuidv4(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 400 || response.status === 401) {
          throw new Error("Falha ao criar usuario.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Conta criada!");
        navigation.navigate("Inicio");
      })
      .catch((error) => console.error(error));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Crie sua conta </Text>

      <StatusBar backgroundColor="#0e111f" barStyle="light-content" />

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={(sobrenome) => setSobrenome(sobrenome)}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={useremail}
        onChangeText={(useremail) => setUserEmail(useremail)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(senha) => setSenha(senha)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.botao} onPress={registrar}>
        <Text style={styles.BotaoTexto}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e111f",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 40,
    textAlign: "center",
    color: "#FFF",
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#FFF",
    margin: 15,
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  botao: {
    backgroundColor: "#995ee6",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 20,
  },
  BotaoTexto: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
