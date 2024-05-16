import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  question: string;
  answer: string;
}

interface UserState {
  id: string;
  email: string;
  messages: Message[];
}

const initialState: UserState = {
  id: '',
  email: '',
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: string; email: string }>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setUser, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
