import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Title>FlexScreen</Title>
      </View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    // alignItems: "center",
    // justifyContent: "center",
  },
  box1: {
    flex: 1,
    backgroundColor: "#5856d6",
  },
  box2: {
    flex: 2,
    backgroundColor: "#4240a2",
  },
  box3: {
    flex: 3,
    backgroundColor: "#2e2d71",
  },
});
