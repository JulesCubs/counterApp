import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../../components/shared/PrimaryButton";

export const CounterScreen = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  const handleLongPress = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CounterScreen</Text>
      <Text style={styles.subtitle}>{count}</Text>
      <PrimaryButton
        handleOnPress={handleIncrementCount}
        handleOnLongPress={handleLongPress}
        buttonTitle="Incrementar"
      />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
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
});
