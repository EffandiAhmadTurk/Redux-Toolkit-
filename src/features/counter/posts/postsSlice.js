import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id: '1' , title: 'Learning Redux Toolkit' , content: 'I have heard Good new regarding Redux Toolkit'}, 
    {id: '2' , title: 'Slices' , content: 'Slice contain function to store initial state'}, 
]
const postsSlice = createSlice({
    name: 'posts',
    initialState, 
    reducers: {},
})  
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;
 