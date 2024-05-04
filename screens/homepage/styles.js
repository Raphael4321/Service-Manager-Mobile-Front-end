import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
  },
  containerHeader: {
    display: "flex",
    flexDirection: "row",
    height: "22%",
    width: "100%",
  },
  containerLeftHeader: {
    height: "100%",
    width: "85%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  mainTitleHeader: {
    marginRight: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
  inputHeaderContainer: {
    width: 170,
    marginRight: 45,
    border: 1,
    borderColor: "#6A7175",
    borderWidth: 1,
    borderRadius: 999,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 7,
  },
  inputHeader: {
    flexGrow: 1,
    marginLeft: 9,
    width: 100,
  },
  containerRightHeader: {
    height: "100%",
    width: "15%",
    alignItems: 'flex-start',
    padding: 18,
    paddingTop: 25,
    paddingRight: 10
  },
  horizontalLine: {
    marginTop: -23,
    width: "100%",
    borderBottomColor: "#6A7175",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  containerCard: {
    marginTop: 35,
    width: 350,
    alignItems: "center",
    paddingBottom: 70,
    flexGrow: 1,
  },
});
