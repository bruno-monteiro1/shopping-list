import { useState } from "react";
import { StyleSheet, View } from "react-native";

import ItemInput from "./components/ItemInput";
import ItemList from "./components/ItemList";

import type { Item } from "./components/Item";

export default function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItemHandler = (newItemText: string) => {
    setItems((currentItems) => [
      ...currentItems,
      { data: newItemText, id: Math.random().toString() },
    ]);
  };

  const removeItemHandler = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <ItemInput onAddItem={addItemHandler} />
      <ItemList items={items} onRemoveItem={removeItemHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 32,
    paddingHorizontal: 16,
  },
});
