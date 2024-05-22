import { StyleSheet, View, FlatList } from "react-native";

import { Item } from "./Item";
import ItemComponent from "./Item";

interface ItemListProps {
  items: Item[];
}

function ItemList({ items }: ItemListProps) {
  return (
    <View style={styles.itemsContainer}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ItemComponent item={item} />;
        }}
      />
    </View>
  );
}

export default ItemList;

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 5,
  },
});