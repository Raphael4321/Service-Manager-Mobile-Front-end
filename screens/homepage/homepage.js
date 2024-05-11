import { Text, View, ScrollView, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { TextInput } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../../components/card/card";
import Choice from "../../components/choice/choice";
import { servicoService } from "../../modules/service_module/service";

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const gettingData = async () => {
    const gettingDataService = await servicoService.getAllService();
    setData(gettingDataService || []);
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
          <MaterialIcons name="questioncircleo" size={24} color="black" />
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <ScrollView
        contentContainerStyle={styles.containerCard}
        showsVerticalScrollIndicator={false}
      >
        <Choice
          navigation={navigation}
          label={"Últimos serviços"}
          description={"Informações de serviços"}
          target={"home"}
        />

        {data
          .filter((item) => filtering(item))
          .map((item, index) => (
            <Card key={index} navigation={navigation} servInfo={item} />
          ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
