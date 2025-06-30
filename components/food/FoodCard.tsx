import React from 'react';
import { View, Text, StyleSheet, Dimensions,Image  } from 'react-native';

interface FoodItem {
  name: string;
  type: string;
  image: any;
}

interface FoodCardProps {
  item: FoodItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.type.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 10,
    alignSelf: 'center',
    elevation: 4,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
  },
});
