import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
           const topicObj = {
               id: action.payload.id,
               name: action.payload.name,
               icon: action.payload.icon,
               quizIds: []
           }
           state.topics[action.payload.id] = topicObj;
    }
});