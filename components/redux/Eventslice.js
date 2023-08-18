import {createSlice} from '@reduxjs/toolkit';
export const EventSlice = createSlice({
  name: 'event',
  initialState: {
    data: [],
  },
  reducers: {
    AddEvent(state, action) {
      const {eventTitle, eventLocation, dateValue, color} = action.payload;
      state.data.push({eventTitle, eventLocation, dateValue, color});
    },
    RemoveEvent: (state, action) => {
      const {eventTitle, eventLocation, dateValue, color} = action.payload;
      state.data.pop({eventTitle, eventLocation, dateValue, color});
    },
  },
});

export const {AddEvent, RemoveEvent} = EventSlice.actions;
export default EventSlice.reducer;
