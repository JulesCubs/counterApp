import { SafeAreaView, StyleSheet } from "react-native";
import Inicial from "./src/presentation/screens/Inicial";
import CounterScreen from "./src/presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Inicial name="Perrito" />
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
