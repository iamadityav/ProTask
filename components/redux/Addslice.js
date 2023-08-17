import { createSlice } from "@reduxjs/toolkit";

export const Addslice = createSlice({
    name: "add",
    initialState: {
        data:[],
    },
    reducers: {
        AddTask : (state, action)=> {
            state.data.push(action.payload);
        },
        RemoveTask: (state, action) => {
            state.data.pop(action.payload);
        }
    }
})

export const { AddTask,RemoveTask } = Addslice.actions;
export default Addslice.reducer;
