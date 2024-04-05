import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#BCBCBC",
  },
  mainText: {
    fontSize: 50,
    fontWeight: "bold",
  },
  titleContainer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textInputWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    padding: 5,
    paddingHorizontal: 10,
    width: 200,
    borderRadius: 8,
    backgroundColor: "#B5C2CA",
    border: 1,
    borderWidth: 1,
    borderColor: "white",
  },
  formWrapper: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    marginTop: 150,
  },
  button: {
    border: 1,
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 16,
    backgroundColor: "#B5C2CA",
  },
});
