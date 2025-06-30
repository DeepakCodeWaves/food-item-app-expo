import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/foodSlice';

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <View style={styles.navbar}>
      <Button title="All" onPress={() => dispatch(setFilter(null))} />
      <Button title="Fat Free" onPress={() => dispatch(setFilter('fat free'))} />
      <Button title="Vegan" onPress={() => dispatch(setFilter('vegan'))} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
  },
});
