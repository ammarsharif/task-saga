import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'UserData',
  initialState: {
    data: [],
  },

  reducers: {
    getAll: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getAll } = user.actions;
export default user.reducer;
