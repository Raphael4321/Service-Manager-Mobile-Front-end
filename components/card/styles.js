import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    height: 120,
    width: "80%",
    paddingVertical: 12,
  },
  containerLeft: {
    borderRadius: 16,
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  buton: {
    position: "absolute",
    right: -18,
    top: 35,
    borderRadius: 999,
    padding: 12,
    backgroundColor: "#081225",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerDesc: {
    height: "70%",
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  desc: {
    fontSize: 15,
    color: "#6A7175",
  },
});
