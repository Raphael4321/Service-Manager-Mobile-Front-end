import { View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

export default function Card({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      {/* containerInfo */}
      <View style={styles.containerLeft}>
        <View style={styles.containerDesc}>
          <Text style={styles.title}>Titulo serviço</Text>
          <Text styles={styles.desc}>Breve descrição deste serviço .....</Text>
        </View>
        <TouchableOpacity
          style={styles.buton}
          activeOpacity={0.8}
          onPress={(ev) => navigation.navigate("Service")}
        >
          <MaterialIcons name="arrow-forward-ios" size={24} color="#6A7175" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
