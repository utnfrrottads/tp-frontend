import React from 'react';
import styles from './Navbar.module.css';
import Avatar from '@mui/material/Avatar';
import { VscTriangleDown } from 'react-icons/vsc';
import Button from '@mui/material/Button';
import { CgLogIn } from 'react-icons/cg';
import Hamburger from 'hamburger-react';
import useMediaQuery from '@mui/material/useMediaQuery';

type Auth = {
    user_id: string,
    user_name: string,
    user_email: string,

}

interface NavbarProps {
    auth: Auth | null,
    setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    menuIsOpen: boolean,
}

const Navbar = ({ auth, setMenuIsOpen, menuIsOpen }: NavbarProps) => {

    const isResponsive: boolean = useMediaQuery("(max-width:768px)");

    return (
        <section className={styles.navbar}>
            <h1>LOGO</h1>

            {isResponsive && <Hamburger toggled={menuIsOpen} onToggle={(toggle) => setMenuIsOpen(!menuIsOpen)} />}

            {!isResponsive && <React.Fragment>
                {auth ?
                    <div className={styles.avatar}>
                        <Avatar sx={{ bgcolor: "#FFFFFF", color: "#F76776", width: 32, height: 32, fontSize: "0.8rem" }} alt="avatar">NA</Avatar>
                        <span>Nombre y Apellido</span>
                        <VscTriangleDown size={15} />
                    </div>
                    :
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
                    </Button>}

            </React.Fragment>}

        </section>
    )
};

export default Navbar;