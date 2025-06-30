import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: null,
  foodItems: [
    {
      id: 1,
      name: 'Salad Bowl',
      type: 'fat free',
      image: require('../assets/images/salad.jpg'),
    },
    {
      id: 2,
      name: 'Vegan Curry',
      type: 'vegan',
      image: require('../assets/images/veg-curry.png'),
    },
    {
      id: 3,
      name: 'Grilled Chicken',
      type: 'fat free',
      image: require('../assets/images/grilled-chicken.jpg'),
    },
    {
      id: 4,
      name: 'Tofu Stir Fry',
      type: 'vegan',
      image: require('../assets/images/tofu.jpg'),
    },
  ],
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = foodSlice.actions;
export default foodSlice.reducer;
