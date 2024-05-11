import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
} from "react-native";
import { servicoService } from "../../modules/service_module/service";
import HeaderService from "../../components/header_service/headerService";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/button/button";
import Animation from "./animation";
import { Platform } from "react-native";

export default function Service({ route, navigation }) {
  const { serviceId } = route.params;
  const [currService, setCurrService] = useState();
  const [isUpdatingObs, setIsUpdatingObs] = useState(false);
  const [newObs, setNewObs] = useState("");
  const [colorCorrect, setColorCorrect] = useState("#FF5733");
  const [refreshing, setRefreshing] = useState(false);

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

  useEffect(() => {
    if (currService && currService.descricao) setNewObs(currService.descricao);
  }, [currService]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    gettingServiceById().then(() => {
      setRefreshing(false);
    });
  }, [gettingServiceById]);

  useEffect(() => {
    if (currService?.status !== undefined) {
      switch (currService.status) {
        case 0: // agendado
          setColorCorrect("#89CFF0"); // Baby Blue
          break;
        case 1: // em atendimento
        case 2: // finalizado
          setColorCorrect("#5F8575"); // green
          break;
        case 3: // cancelado
          setColorCorrect("#FF5733"); // vermelho
          break;
        default:
          setColorCorrect("#89CFF0");
      }
    }
  }, [currService?.status]);

  const savingUpdateDesc = async () => {
    const serviceDTO = {
      ...currService,
      descricao: newObs.trim(),
    };

    const savedOne = await servicoService.updateServico(
      currService._id,
      serviceDTO
    );

    if (savedOne) {
      const auxAtt = {
        ...currService,
        descricao: savedOne?.descricao ?? "",
      };

      setCurrService(auxAtt);
      alert("Salvo com sucesso!");
    }
  };

  const updatingObservacao = () => {
    if (isUpdatingObs) {
      savingUpdateDesc();
      setIsUpdatingObs(false);
    } else {
      setIsUpdatingObs(true);
    }
  };

  const finalizarAtendimento = async () => {
    const serviceDTO = {
      ...currService,
      status: 2, // finalizado
    };

    const response = await servicoService.updateServico(
      serviceDTO._id,
      serviceDTO
    );

    if (response) {
      const newOne = {
        ...currService,
        status: response.status,
      };
      setCurrService(newOne);
      alert("Atendimento finalizado com sucesso!");
    } else {
      alert("Impossível finalizar o atendimento!");
    }
  };

  const initAtendimento = async () => {
    const servicoDTO = {
      ...currService,
      status: 1, // em atendimento
    };

    const updatedService = await servicoService.updateServico(
      servicoDTO._id,
      servicoDTO
    );

    if (updatedService) {
      const updatingState = {
        ...currService,
        status: updatedService.status,
      };
      setCurrService(updatingState);
      alert("Atendimento iniciado com sucesso!");
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={Platform.OS === "android" ? { flexGrow: 1 } : {}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HeaderService title={currService?.nome ?? ""} />
        <View style={styles.clienteNameFotoContainer}>
          <Image
            source={require("../../assets/defaultClientIcon.png")}
            style={styles.iconCliente}
          />
          <Text>
            Agendado para{" "}
            <Text style={styles.nameCliente}>
              {currService?.cliente?.nome ?? ""}
            </Text>
          </Text>
        </View>
        <View style={styles.containerServiceDesc}>
          <View style={styles.containerDesc}>
            <View style={styles.editButtonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={updatingObservacao}
              >
                <AntDesign name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
            {isUpdatingObs ? (
              <TextInput
                value={newObs}
                onChangeText={setNewObs}
                placeholder="Digite aqui"
                style={styles.inputDesc}
                multiline={true}
              />
            ) : (
              <Text>{currService?.descricao}</Text>
            )}
          </View>
          <View style={styles.containerObs}>
            <View style={styles.containerLeft}>
              <View style={styles.containerDescBtn}>
                <Text style={styles.title}>Observações</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("ServiceDetails", {
                    currService: currService,
                  })
                }
              >
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="#6A7175"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerCircle}>
            <Animation statusCode={currService?.status}>
              <View
                style={[styles.circle, { backgroundColor: colorCorrect }]}
              />
            </Animation>
          </View>
          <View>
            {currService?.status === 1 ? (
              <Button
                width={200}
                height={40}
                bgColor={"#081225"}
                color={"white"}
                action={finalizarAtendimento}
                label={"Finalizar atendimento"}
              />
            ) : (
              <Button
                width={200}
                height={40}
                bgColor={"#081225"}
                color={"white"}
                action={initAtendimento}
                label={"Iniciar Atendimento"}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
