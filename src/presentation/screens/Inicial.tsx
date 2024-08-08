import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface InicialProps {
  name?: string;
}

export const Inicial = ({ name = "RN" }: InicialProps) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.title}>
        Hola {name}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Inicial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 45,
    textAlign: "center",
    color: "black",
    padding: 20,
  },
});
