import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

const HeaderPerfil = ({ nome }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/defaultClientIcon.png")}
        style={styles.iconCliente}
      />
      <View>
        <Text>
          <Text style={styles.nameCliente}>Olá, {nome}</Text>
        </Text>
      </View>
    </View>
  );
};

export default HeaderPerfil;
