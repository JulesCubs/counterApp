import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "black",
  },
  subtitle: {
    fontSize: 20,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    backgroundColor: "#3498db",
    bottom: Platform.OS === "android" ? 15 : 0,
  },
});
