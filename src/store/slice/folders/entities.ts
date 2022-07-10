export type TLinkParams = {
  name: string;
  src: string;
  image?: string;
}

export type TFolderParams = {
  name: string;
  description: string;
}

export type TLink = TLinkParams & {
  id: string;
};

export type TFolder = TFolderParams & {
  id: string;
  links: TLink[];
}

export type TFoldersState = {
  data: TFolder[];
}

// action payload types

export type TPayloadCreateLink = {
  id: string;
  params: TLinkParams;
}

export type TPayloadRemoveLink = {
  folderId: string;
  linkId: string;
}
