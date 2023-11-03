import { StyleSheet } from "react-native";
import { FONT } from "../constant/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
  },
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontFamily: FONT.regular,
    fontSize: 14,
  },
  iconBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#F7F6F9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONT.semibold,
    marginBottom: 8,
  },
  categoriesBtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
  },
  categoriesBtnText: {
    fontFamily: FONT.medium,
    fontSize: 12,
    marginTop: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: FONT.bold,
    color: "#151619"
  },
  cardSubTitle: {
    fontFamily: FONT.regular,
    fontSize: 12,
    color: "#6B6978"
  },
  cardPrice : {
    color: "#F7AF4B",
    fontSize: 14,
    fontFamily : FONT.semibold
  }
});

export default styles;
