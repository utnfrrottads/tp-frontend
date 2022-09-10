import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';
import Button from '@mui/material/Button';
import { CgLogIn } from 'react-icons/cg';

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {


    const [menuIsOpen, setMenuIsOpen] = useState(false);


    return (

        <main>
            <Navbar auth={null} setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
            <section className={styles.body}>
                {children}
            </section>
            <div style={{ height: menuIsOpen ? "calc(100% - 64px)" : "0" }} className={styles.menu}>
                <Button sx={{
                    background: "#FFFFFF",
                    color: "#F76776",
                    border: "none",
                    "&:hover": {
                        background: "#DADADA"
                    }
                }}
                    variant="contained" size="small" startIcon={<CgLogIn />}>
                    Ingresar
                </Button>
            </div>
        </main>

    )
};

export default Layout;