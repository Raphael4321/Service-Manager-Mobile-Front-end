import { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { servicoService } from "../../modules/service_module/service";
import HeaderService from "../../components/headerService/headerService";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/button/button";

export default function Service({ route, navigation }) {
  // id chosen service
  const { serviceId } = route.params;
  const [currService, setCurrService] = useState();

  const gettingServiceById = useCallback(async () => {
    if (serviceId) {
      const serviceResp = await servicoService.getServiceById(serviceId);
      if (serviceResp) {
        setCurrService(serviceResp);
      }
    }
  }, [serviceId]);

  useEffect(() => {
    gettingServiceById();
  }, []);

  const initAtendimento = () => {
    console.log("iniciando atendimento");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderService title={currService?.nome ?? ""} />
      <View style={styles.clienteNameFotoContainer}>
        <Image
          source={require("../../assets/defaultClienteIcon.jpg")}
          style={styles.iconCliente}
        />
        <View>
          <Text>
            Agendado para{" "}
            <Text style={styles.nameCliente}>
              {currService?.cliente?.nome ?? ""}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.containerServiceDesc}>
        <View style={styles.containerDesc}>
          <View
            style={{ alignItems: "flex-end", width: "100%", paddingRight: 10 }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                console.log("editing..");
              }}
            >
              <AntDesign name="edit" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text>{currService?.descricao}</Text>
        </View>
        <View style={styles.containerObs}>
          {/* containerInfo */}
          <View style={styles.containerLeft}>
            <View style={styles.containerDescBtn}>
              <Text style={styles.title}>Observações</Text>
            </View>
            <TouchableOpacity
              style={styles.buton}
              activeOpacity={0.8}
              onPress={(ev) => navigation.navigate("Service")}
            >
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#6A7175"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Button
            width={200}
            height={40}
            bgColor={"#081225"}
            color={"white"}
            action={initAtendimento}
            label={"Iniciar Atendimento"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
