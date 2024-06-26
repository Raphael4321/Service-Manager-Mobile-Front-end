import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function Card({ navigation, servInfo }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerLeft}>
        <View style={styles.containerDesc}>
          <Text style={styles.title}>{servInfo.nome}</Text>
          <Text style={styles.desc}>{servInfo.descricao}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("Service", { serviceId: servInfo._id })
          }
        >
          <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
