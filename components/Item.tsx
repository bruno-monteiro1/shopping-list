import { StyleSheet, View, Text, Pressable } from "react-native";

interface ItemProps {
  item: Item;
  onRemoveItem: (id: string) => void;
  index?: string;
  separators?: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: "leading" | "trailing", newProps: any) => void;
  };
}

export interface Item {
  data: string;
  id: string;
}

function Item({ item, onRemoveItem }: ItemProps) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: "darkblue" }}
        onPress={() => onRemoveItem(item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.itemText}>{item.data}</Text>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "blue",
    color: "white",
  },
  pressedItem: {
    opacity: 0.7,
  },
  itemText: {
    padding: 8,
    color: "white",
  },
});
