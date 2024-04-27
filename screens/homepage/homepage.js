import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { TextInput } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Card from "../../components/card/card";
import { servicoService } from "../../modules/service_module/service";
import { Platform } from "react-native";

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const gettingData = async () => {
    const gettingDataService = await servicoService.getAllService();
    setData(gettingDataService);
  };

  useEffect(() => {
    gettingData();
  }, []);

  const filtering = (item) => {
    if (
      item.nome
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase()) ||
      item.descricao
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerHeader}>
        {/* left */}
        <View style={styles.containerLeftHeader}>
          <Text style={styles.mainTitleHeader}>Olá, Seja bem vindo(a)!</Text>
          <View style={styles.inputHeaderContainer}>
            <TextInput
              value={search}
              onChangeText={setSearch}
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
      <ScrollView
        contentContainerStyle={styles.containerCard}
        showsVerticalScrollIndicator={false}
      >
        {data
          .filter((item) => filtering(item))
          .map((item, index) => (
            <Card key={index} navigation={navigation} servInfo={item} />
          ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
