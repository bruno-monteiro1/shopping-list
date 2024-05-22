import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [items, setItems] = useState<{ data: string; id: string }[]>([]);
  const [newItemText, setNewItemText] = useState<string>("");

  const itemInputHandler = (text: string) => {
    setNewItemText(text);
  };

  const addItemHandler = () => {
    setItems((currentItems) => [
      ...currentItems,
      { data: newItemText, id: Math.random().toString() },
    ]);
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
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.data}</Text>
              </View>
            );
          }}
        />
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
  item: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "blue",
    color: "white",
  },
  itemText: {
    color: "white",
  },
});
