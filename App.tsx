import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import ItemInput from "./components/ItemInput";
import ItemList from "./components/ItemList";

import type { Item } from "./components/Item";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const addItemHandler = (newItemText: string) => {
    setItems((currentItems) => [
      ...currentItems,
      { data: newItemText, id: Math.random().toString() },
    ]);
    closeModal();
  };

  const removeItemHandler = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Adicionar item" color="blue" onPress={openModal} />
      <ItemInput
        onAddItem={addItemHandler}
        visible={isModalVisible}
        onCancel={closeModal}
      />
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
