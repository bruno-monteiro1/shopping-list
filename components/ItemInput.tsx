import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

interface ItemInput {
  onAddItem: (newItemText: string) => void;
}

function ItemInput({ onAddItem }: ItemInput) {
  const [newItemText, setNewItemText] = useState<string>("");

  const itemInputHandler = (text: string) => {
    setNewItemText(text);
  };

  const addInputHandler = () => {
    onAddItem(newItemText);
    setNewItemText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="O que deseja adicionar?"
        style={styles.textInput}
        onChangeText={itemInputHandler}
        value={newItemText}
      />
      <Button title="Adicionar" onPress={addInputHandler} />
    </View>
  );
}

export default ItemInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
