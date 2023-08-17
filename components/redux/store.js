import { configureStore } from "@reduxjs/toolkit";
import AddReducer from './Addslice';
import RemoveReducer from './Addslice';

export const store = configureStore({
    reducer: {
        add: AddReducer,
        remove:RemoveReducer,
    }
})
