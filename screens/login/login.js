import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { AuthService } from "../../modules/auth/service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  const isFocused = useIsFocused();

  const submit = useCallback(async () => {
    const loginInfo = {
      email: email,
      senha: senha,
    };

    try {
      const login = await AuthService.Login(loginInfo);

      if (login && login.token) {
        try {
          await AsyncStorage.setItem("token", login.token);
          navigation.navigate("menu");
        } catch (e) {
          console.error(e);
          Alert.alert("Erro", "Falha ao inserir no async storage");
        }
      } else {
        Alert.alert("Erro", login.error || "Senha ou email incorreto");
      }
    } catch (e) {
      console.error(e);
      Alert.alert("Erro", e.message || "Ocorreu um erro durante o login");
    }
  }, [email, senha]);

  const verifyToken = async () => {
    const myToken = await AsyncStorage.getItem("token");
    if (myToken) {
      navigation.navigate("menu");
    }
  };

  useEffect(() => {
    verifyToken();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainText}>Login</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.textInputWrapper}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            value={senha}
            onChangeText={setSenha}
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, isPressed && styles.buttonActive]}
            activeOpacity={0.5}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={(ev) => submit()}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
