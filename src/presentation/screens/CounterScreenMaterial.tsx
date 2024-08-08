import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, FAB } from "react-native-paper";
import { globalStyles } from "../theme/global.styles";

import Icon from "react-native-vector-icons/Ionicons";

export const CounterScreenMaterial = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  const handleLongPress = () => {
    setCount(0);
  };

  return (
    <View style={globalStyles.container}>
      <Icon name="accessibility-outline" size={35} color={"red"} />
      <Text style={globalStyles.title}>CounterScreen Material</Text>
      <Text style={globalStyles.subtitle}>{count}</Text>
      <Button
        onPress={handleIncrementCount}
        onLongPress={handleLongPress}
        mode="contained"
      >
        Incrementar
      </Button>
      <FAB
        style={globalStyles.fab}
        onPress={handleIncrementCount}
        onLongPress={handleLongPress}
        label="+1"
        icon={"add"}
      />
    </View>
  );
};

export default CounterScreenMaterial;
