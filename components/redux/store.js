import {configureStore} from '@reduxjs/toolkit';
import AddReducer from './Addslice';
import RemoveReducer from './Addslice';
import EventReducer from './Eventslice';

export const store = configureStore({
  reducer: {
    add: AddReducer,
    remove: RemoveReducer,
    event: EventReducer,
    removeEvent: EventReducer,
  },
});
