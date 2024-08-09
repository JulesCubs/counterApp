import { StyleSheet, Text, View } from "react-native";

const BoxModelObject = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>BoxObjectModelScreen</Text>
        <View style={styles.purpleBox}>
          <Text style={styles.titleBox}>PurpleBox</Text>
        </View>
      </View>
    </>
  );
};

export default BoxModelObject;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "red",
    padding: 20,
  },
  title: {
    fontSize: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "black",
    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    margin: 10,
    backgroundColor: "purple",
    padding: 5,
  },
  titleBox: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
