import { View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

export default function Card({ navigation, servInfo }) {
  return (
    <View style={styles.mainContainer}>
      {/* containerInfo */}
      <View style={styles.containerLeft}>
        <View style={styles.containerDesc}>
          <Text style={styles.title}>{servInfo.nome}</Text>
          <Text styles={styles.desc}>{servInfo.descricao}</Text>
        </View>
        <TouchableOpacity
          style={styles.buton}
          activeOpacity={0.8}
          onPress={(ev) =>
            navigation.navigate("Service", { serviceId: servInfo._id })
          }
        >
          <MaterialIcons name="arrow-forward-ios" size={24} color="#6A7175" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
