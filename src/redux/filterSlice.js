const { createSlice } = require('@reduxjs/toolkit');
const { statusFilters } = require('./const');

const filterState = {
  status: statusFilters,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
