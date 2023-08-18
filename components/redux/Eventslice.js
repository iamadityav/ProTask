import {createSlice} from '@reduxjs/toolkit';
export const EventSlice = createSlice({
  name: 'event',
  initialState: {
    data: [],
  },
  reducers: {
    AddEvent(state, action) {
      state.data.push(action.payload);
    },
    RemoveEvent: (state, action) => {
      state.data.pop(action.payload);
    },
  },
});

export const {AddEvent, RemoveEvent} = EventSlice.actions;
export default EventSlice.reducer;
