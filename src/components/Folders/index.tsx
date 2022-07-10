import React from 'react';
import { FolderFilled } from '@ant-design/icons';
import styles from './index.module.scss';

const Folders = () => {
  const folders = ['EcoTrees', 'Универ', 'Minecraft Bedrock'];

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {
          folders.map((folder) => (
            <li key={folder}>
              <FolderFilled />
              <span>{ folder }</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Folders;
