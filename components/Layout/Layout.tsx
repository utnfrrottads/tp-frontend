import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    const LOGGED_IN: boolean = true;    //Variable solo para testing, eliminar al terminar de usarla

    return (

        <main className={styles.main}>
            <Navbar auth={LOGGED_IN ? {user_id:"1",user_name:"Nombre y Apellido", user_email: "asdas@gmail.com", user_profile_photo: "s"} : null} />
            <section className={styles.body}>
                {children}
            </section>
        </main>

    )
};

export default Layout;