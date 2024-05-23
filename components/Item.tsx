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
    <Pressable onPress={() => onRemoveItem(item.id)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.data}</Text>
      </View>
    </Pressable>
  );
}

export default Item;

const styles = StyleSheet.create({
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
