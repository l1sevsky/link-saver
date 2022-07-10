import React, { ReactNode } from 'react';
import styles from './index.module.scss';

type TProps = {
  children: ReactNode,
}

const Layout = ({ children }: TProps) => (
  <main className={styles.layout}>
    { children }
  </main>
);

export default Layout;
