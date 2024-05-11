import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
    width: "100%",
    padding: 10,
    backgroundColor: "#E5E5E5",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerDesc: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#081225",
  },
  desc: {
    fontSize: 16,
    color: "#6A7175",
  },
  button: {
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
