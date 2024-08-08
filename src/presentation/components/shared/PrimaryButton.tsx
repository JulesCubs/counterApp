import { Platform, Pressable, StyleSheet, Text } from "react-native";

interface PrimaryButtonProps {
  handleOnPress?: () => void;
  handleOnLongPress?: () => void;
  buttonTitle?: string;
}

export const PrimaryButton = ({
  handleOnPress,
  handleOnLongPress,
  buttonTitle = "Tocar",
}: PrimaryButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={() => handleOnPress?.()}
      onLongPress={() => handleOnLongPress?.()}
    >
      <Text style={styles.buttonTitle}>Incrementar</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === "android" ? "#5856D6" : "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTitle: {
    color: Platform.OS === "android" ? "white" : "black",
  },
  buttonPressed: {
    backgroundColor: Platform.OS === "android" ? "#38376F" : "white",
  },
});
