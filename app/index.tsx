import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Navbar from '../components/food/Navbar'; 
import FoodCard from '../components/food/FoodCard'; 

interface RootState {
  food: {
    foodItems: any[];
    filter: string | null;
  };
}

export default function FoodScreen() {
  const { foodItems, filter } = useSelector((state: RootState) => state.food);

  const filteredItems = filter
    ? foodItems.filter((item) => item.type === filter)
    : foodItems;

  return (
    <View style={styles.container}>
      <Navbar />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FoodCard item={item} />}
        ListEmptyComponent={<Text style={styles.empty}>No food items</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  empty: {
    marginTop: 20,
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
});
