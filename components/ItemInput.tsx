import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

interface ItemInput {
  onAddItem: (newItemText: string) => void;
  visible: boolean;
  onCancel: () => void;
}

function ItemInput({ onAddItem, visible, onCancel }: ItemInput) {
  const [newItemText, setNewItemText] = useState<string>("");

  const itemInputHandler = (text: string) => {
    setNewItemText(text);
  };

  const addInputHandler = () => {
    onAddItem(newItemText);
    setNewItemText("");
  };

  return (
    <>
      <StatusBar backgroundColor="darkblue" style="light"/>
      <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/shopping-cart.png")}
            style={styles.image}
          />
          <TextInput
            placeholder="O que deseja adicionar?"
            style={styles.textInput}
            onChangeText={itemInputHandler}
            value={newItemText}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button title="Adicionar" onPress={addInputHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Cancelar" onPress={onCancel} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default ItemInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    padding: 16,
    backgroundColor: "darkblue",
  },
  image: {
    width: 120,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    width: "100%",
    padding: 8,
    backgroundColor: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: 150,
    marginHorizontal: 8,
  },
});
