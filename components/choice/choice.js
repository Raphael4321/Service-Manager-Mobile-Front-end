import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function choice({
  navigation,
  label,
  description,
  target,
  iconName,
}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerLeft}>
        <MaterialIcons name={iconName} size={24} color="#6A7175" />
        {/* Ícone à esquerda */}
        <View style={styles.containerDesc}>
          <Text style={styles.title}>{label}</Text>
          <Text style={styles.desc}>{description}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate(target)}
        >
          <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
