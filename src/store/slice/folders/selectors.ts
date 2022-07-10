import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/configureStore';

const getFoldersSlice = (state: TState) => state.folders;

export const getFolders = createSelector(getFoldersSlice, (slice) => slice.data);
