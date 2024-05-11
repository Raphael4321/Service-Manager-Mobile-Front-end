import React from "react";
import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

function PerfilData({ route }) {
  const { currUserData } = route.params;
  const [bairro, setBairro] = React.useState(
    currUserData && currUserData.bairro ? currUserData.bairro : ""
  );
  const [cep, setCep] = React.useState(
    currUserData && currUserData.cep ? currUserData.cep : ""
  );
  const [nome, setNome] = React.useState(
    currUserData && currUserData.nome ? currUserData.nome : ""
  );
  const [rua, setRua] = React.useState(
    currUserData && currUserData.rua ? currUserData.rua : ""
  );

  /*
    it will edit 
    bairro
    cep
    nome
    rua
  */

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Editando Informações</Text>
      </View>
      <View>
        <View>
          <Text>Nome</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
            placeholder="Nome"
            style={styles.inputDesc}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PerfilData;
