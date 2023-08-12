import { createSlice } from '@reduxjs/toolkit';

const BuilderReducer = createSlice({
  name: 'builderReducer',

  initialState: {
    selectedMetaFields: [],
  },

  reducers: {
    addMetaFields: (state) => {
      state.selectedMetaFields = [];
    },
  },
});

export const BuilderAction = {
  ...BuilderReducer.actions,
};

export default BuilderReducer.reducer;
