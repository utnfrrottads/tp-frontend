import React, { FunctionComponent } from 'react';
import styles from './Navbar.module.css';
import Avatar from '@mui/material/Avatar';
import {VscTriangleDown} from 'react-icons/vsc';

type NavbarProps = {
    auth?: object,
}

const Navbar: FunctionComponent<NavbarProps> = ({ auth }) => {

    return (
        <section className={styles.navbar}>
            <h1>LOGO</h1>
            <div>
                <div className={styles.avatar}>
                    <Avatar sx={{ bgcolor: "#FFFFFF", color: "#F76776", width: 32, height: 32, fontSize:"0.8rem" }} alt="avatar">NA</Avatar>
                    <span>Nombre y Apellido</span>
                    <VscTriangleDown size={15}/>
                </div>
            </div>
        </section>
    )
};

export default Navbar;