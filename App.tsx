import { SafeAreaView, StyleSheet } from "react-native";
import Inicial from "./src/presentation/screens/Inicial";
import CounterScreen from "./src/presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";
import CounterScreenMaterial from "./src/presentation/screens/CounterScreenMaterial";

import IonIcon from "react-native-vector-icons/Ionicons";

export default function App() {
  return (
    <PaperProvider settings={{ icon: (props) => <IonIcon {...props} /> }}>
      <SafeAreaView style={styles.container}>
        <Inicial name="Perrito" />
        <CounterScreen />
        <CounterScreenMaterial />
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
