import { createSlice } from '@reduxjs/toolkit';
import { foldersActions } from './actions';
import { TFoldersState } from './entities';

const initialState: TFoldersState = {
  data: [],
};

const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: foldersActions,
});

export const foldersReducer = foldersSlice.reducer;
export const {
  createFolder,
  createLink,
  removeFolder,
  removeLink,
} = foldersSlice.actions;
