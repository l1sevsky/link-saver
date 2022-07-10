import { v4 as getUniqId } from 'uuid';
import { PayloadAction } from '@reduxjs/toolkit';
import { TFoldersState, TFolderParams, TPayloadCreateLink, TPayloadRemoveLink } from './entities';

export const foldersActions = {
  createFolder: (state: TFoldersState, { payload: params }: PayloadAction<TFolderParams>) => {
    state.data.push({
      ...params,
      links: [],
      id: getUniqId(),
    });
  },

  removeFolder: (state: TFoldersState, { payload: id }: PayloadAction<string>) => {
    state.data.filter((folder) => (
      folder.id !== id
    ));
  },

  createLink: (state: TFoldersState, { payload }: PayloadAction<TPayloadCreateLink>) => {
    const { id, params } = payload;

    state.data.forEach((folder) => {
      if (folder.id === id) {
        folder.links.push({
          ...params,
          id: getUniqId(),
        });
      }
    });
  },

  removeLink: (state: TFoldersState, { payload }: PayloadAction<TPayloadRemoveLink>) => {
    const { folderId, linkId } = payload;

    state.data.forEach((folder) => {
      if (folder.id === folderId) {
        folder.links.filter((link) => link.id !== linkId);
      }
    });
  },
};
