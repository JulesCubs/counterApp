import {
  Dimensions,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { Text } from "react-native-paper";

// const { width, height } = Dimensions.get("window");

const DimensionsScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>DimensionsScreen</Text>
        <View style={{ ...styles.yellowBox, width: width * 0.5 }} />
      </View>
      <Text>
        w: {width}, h: {height}
      </Text>
    </View>
  );
};

export default DimensionsScreen;

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 150,
    backgroundColor: "blue",
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  yellowBox: {
    backgroundColor: "yellow",
    height: "50%",
    width: "50%",
  },
});
