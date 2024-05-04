import { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
  DevSettings,
  ScrollView,
  RefreshControl,
} from "react-native";
import { servicoService } from "../../modules/service_module/service";
import HeaderService from "../../components/headerService/headerService";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/button/button";
import Animation from "./animation";

export default function Service({ route, navigation }) {
  // id chosen service
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
  }, []);

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
  }, []);

  const initAtendimento = async () => {
    const servicoDTO = {
      ...currService,
      status: 1,
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
      alert("Atendimento iniciado!!");
    }
  };

  useEffect(() => {
    switch (currService?.status) {
      case 0: //agendado
        //Baby Blue
        setColorCorrect("#89CFF0");
        break;
      case 1: //em atendimento
        // green
        setColorCorrect("#5F8575");
        break;
      case 2: //finalizado
        // green
        setColorCorrect("#5F8575");
        break;
      case 3: //cancelado
        // vermelho
        setColorCorrect("#FF5733");
        break;
      default:
        setColorCorrect("#89CFF0");
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
      alert("salvo com sucesso!!");
    }
  };

  const updatingObservacao = () => {
    if (isUpdatingObs) {
      // update
      savingUpdateDesc();
      setIsUpdatingObs(false);
    } else {
      setIsUpdatingObs(true);
    }
  };

  const finalizarAtendimento = () => {
    const serviceDTO = {
      ...currService,
      status: 2,
    };

    // padding id, dto
    const response = servicoService.updateServico(serviceDTO._id, serviceDTO);

    if (response) {
      alert("finalizado com sucesso!");
      setCurrService(serviceDTO);
    } else {
      alert("impossível finalizar atendimento!");
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
              style={{
                alignItems: "flex-end",
                width: "100%",
                paddingRight: 10,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  updatingObservacao();
                }}
              >
                <AntDesign name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
            {isUpdatingObs ? (
              <TextInput
                value={newObs}
                onChangeText={setNewObs}
                placeholder="value"
                style={styles.inputDesc}
                multiline={true}
              />
            ) : (
              <Text>{currService?.descricao}</Text>
            )}
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
                onPress={(ev) =>
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
          <View>
            {currService?.status == 1 ? (
              <>
                <Button
                  width={200}
                  height={40}
                  bgColor={"#081225"}
                  color={"white"}
                  action={finalizarAtendimento}
                  label={"Finalizar atendimento"}
                />
              </>
            ) : (
              <>
                <Button
                  width={200}
                  height={40}
                  bgColor={"#081225"}
                  color={"white"}
                  action={initAtendimento}
                  label={"Iniciar Atendimento"}
                />
              </>
            )}
          </View>
          <View style={styles.containerCircle}>
            <Animation statusCode={currService?.status}>
              <View
                style={{
                  ...styles.circle,
                  backgroundColor: colorCorrect,
                }}
              />
            </Animation>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
