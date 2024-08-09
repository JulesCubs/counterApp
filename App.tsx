import { SafeAreaView, StyleSheet, View } from "react-native";
import Inicial from "./src/presentation/screens/Inicial";
import CounterScreen from "./src/presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";
import CounterScreenMaterial from "./src/presentation/screens/CounterScreenMaterial";
import IonIcon from "react-native-vector-icons/Ionicons";
import BoxModelObject from "./src/presentation/screens/BoxModelObject";
import DimensionsScreen from "./src/presentation/screens/DimensionsScreen";
import PositionScreen from "./src/presentation/screens/PositionScreen";

export default function App() {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />,
      }}
    >
      <SafeAreaView style={styles.container}>
        <View>
          {/* <Inicial name="Chinin" /> */}
          {/* <CounterScreen /> */}
          {/* <CounterScreenMaterial /> */}
          {/* <BoxModelObject /> */}
          {/* <DimensionsScreen /> */}
          <PositionScreen />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
