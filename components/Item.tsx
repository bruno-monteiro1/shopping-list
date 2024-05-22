import { StyleSheet, View, Text } from "react-native";

interface ItemProps {
  item: Item;
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

function Item({ item }: ItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.data}</Text>
    </View>
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
