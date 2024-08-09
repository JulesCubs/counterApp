import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PositionScreen</Text>
      <View style={styles.purpleBox}>
        <Text>purpleBox</Text>
      </View>
      <View style={styles.yellowBox}>
        <Text>yellowBox</Text>
      </View>
    </View>
  );
};

export default PositionScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: "100%",
    height: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
    position: "relative",
    borderWidth: 10,
    borderColor: "white",
    top: 100,
    left: 50,
  },
  yellowBox: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    position: "absolute",
    borderWidth: 10,
    borderColor: "white",
    top: 200,
    left: 50,
  },
});
