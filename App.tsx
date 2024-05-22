import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItemText, setNewItemText] = useState<string>("");

  const itemInputHandler = (text: string) => {
    setNewItemText(text);
  };

  const addItemHandler = () => {
    setItems((currentItems) => [...currentItems, newItemText]);
    setNewItemText("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="O que deseja adicionar?"
          style={styles.textInput}
          onChangeText={itemInputHandler}
          value={newItemText}
        />
        <Button title="Adicionar" onPress={addItemHandler} />
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 32,
    paddingHorizontal: 16,
  },
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
  itemsContainer: {
    flex: 5,
  },
});
