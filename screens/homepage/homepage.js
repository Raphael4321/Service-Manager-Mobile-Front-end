import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { TextInput } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Card from "../../components/card/card";
import { servicoService } from "../../modules/service_module/service";

export default function Home({ navigation }) {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  const gettingData = async () => {
    const gettingDataService = await servicoService.getAllService();
    setData(gettingDataService);
  };

  useEffect(() => {
    gettingData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        {/* left */}
        <View style={styles.containerLeftHeader}>
          <Text style={styles.mainTitleHeader}>Olá, Seja bem vindo(a)!</Text>
          <View style={styles.inputHeaderContainer}>
            <TextInput
              value={filter}
              onChange={(ev) => setFilter(ev.target.value)}
              style={styles.inputHeader}
              placeholder="Filtrar serviços"
            />
            <FontAwesome name="filter" size={24} color="#6A7175" />
          </View>
        </View>
        {/* right */}
        <View style={styles.containerRightHeader}>
          <AntDesign name="questioncircleo" size={24} color="black" />
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.containerCard}>
        {data.map((item, index) => (
          <Card navigation={navigation} />
        ))}
      </View>
    </SafeAreaView>
  );
}
