import React, { useCallback, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { AuthService } from "../../modules/auth/service";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const submit = useCallback(async () => {
    const loginInfo = {
      email: email,
      senha: senha,
    };

    const login = AuthService.Login(loginInfo);

    if (login) {
      navigation.navigate("home");
    } else {
      alert("Senha ou email incorreto");
    }
  }, [email, senha]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainText}>Login</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.textInputWrapper}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="work@mail.com"
            style={styles.input}
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text>Senha</Text>
          <TextInput
            value={senha}
            onChange={(ev) => setSenha(ev.target.value)}
            placeholder="Senha...."
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={(ev) => submit()}
          >
            <Text>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
