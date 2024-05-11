import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center", // Centraliza os elementos horizontalmente
  },
  clienteNameFotoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "center", // Centraliza os elementos horizontalmente
  },
  iconCliente: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  nameCliente: {
    fontWeight: "bold",
  },
  containerServiceDesc: {
    marginBottom: 20,
    alignItems: "center", // Centraliza os elementos horizontalmente
  },
  containerDesc: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "80%", // Define a largura para evitar que ocupe toda a largura da tela
  },
  editButtonContainer: {
    alignItems: "flex-end",
    marginBottom: 10,
  },
  inputDesc: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    minHeight: 100,
    width: "100%", // Define a largura total do TextInput
  },
  containerObs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: "80%", // Define a largura para evitar que ocupe toda a largura da tela
  },
  containerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerDescBtn: {
    marginRight: 10,
  },
  button: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#081225",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCircle: {
    alignItems: "center",
    marginBottom: 20,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#081225",
  },
});
