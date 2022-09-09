import React, { FunctionComponent } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

type LayoutProps = {
    children: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <main>
            <Navbar/>
            <section className={styles.body}>
                {children}
            </section>
        </main>
    )
};

export default Layout;