import { StyleSheet, View, FlatList } from "react-native";

import { Item } from "./Item";
import ItemComponent from "./Item";

interface ItemListProps {
  items: Item[];
  onRemoveItem: (id: string) => void;
}

function ItemList({ items, onRemoveItem }: ItemListProps) {
  return (
    <View style={styles.itemsContainer}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ItemComponent item={item} onRemoveItem={onRemoveItem} />;
        }}
      />
    </View>
  );
}

export default ItemList;

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 5,
    marginTop: 15,
  },
});
