import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function registrar() {
    if (user === "" || email === "" || senha === "") {
      alert("Campo(s) não preenchido(s)");
      return;
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Crie sua conta </Text>

      <StatusBar backgroundColor="#0e111f" barStyle="light-content" />

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={user}
        onChangeText={(user) => setUser(user)}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(email) => setEmail(email)}
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
