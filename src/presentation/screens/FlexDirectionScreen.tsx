import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Title>FlexDirectionScreen</Title>
      </View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
    </View>
  );
};

export default FlexDirectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "gray",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: 5,
    columnGap: 15,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  box1: {
    backgroundColor: "#5856d6",
    // top: -100,
  },
  box2: {
    backgroundColor: "#4240a2",
    alignSelf: "flex-end",
  },
  box3: {
    backgroundColor: "#2e2d71",
    // top: 100,
  },
});
