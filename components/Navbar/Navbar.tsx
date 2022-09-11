import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Avatar from '@mui/material/Avatar';
import { VscTriangleDown } from 'react-icons/vsc';
import { CgLogIn, CgLogOff } from 'react-icons/cg';
import { MdDeliveryDining } from 'react-icons/md';
import { IoSettings } from 'react-icons/io5';
import Hamburger from 'hamburger-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HiHome } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


type Auth = {
    user_id: string,
    user_name: string,
    user_email: string,
    user_profile_photo: string,


};

interface NavbarProps {
    auth: Auth | null,
};

const Navbar = ({ auth }: NavbarProps) => {

    const isResponsive: boolean = useMediaQuery("(max-width:768px)");
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };



    return (
        <>
            <section className={styles.navbar}>



                <h1>LOGO</h1>



                {isResponsive && <Hamburger size={25} toggled={menuIsOpen} onToggle={() => setMenuIsOpen(!menuIsOpen)} />}



                {!isResponsive && <div onClick={handleClick} className={styles.horizontal_avatar}>
                    {auth && <Avatar sx={{ bgcolor: "#FFFFFF", color: "#F76776", width: 32, height: 32, fontSize: "0.8rem" }} alt="avatar">NA</Avatar>}
                    {auth && <span>Nombre y Apellido</span>}
                    <VscTriangleDown size={15} />
                </div>}



                {!isResponsive && <Dropdown auth={auth} anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>}

            </section>

            {isResponsive && <ResponsiveDropdown menuIsOpen={menuIsOpen} auth={auth} />}
        </>
    )
};

/*------------------------------------------------DROPDOWN COMPONENT FOR NAVBAR---------------------------------------------*/

interface DropdownProps {
    auth: Auth | null,
    anchorEl: null | HTMLElement,
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

const Dropdown = ({ auth, anchorEl, setAnchorEl }: DropdownProps) => {


    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem sx={{ color: "#F76776", "&:hover": { background: "#F5B4BB" } }} onClick={handleClose}>
                <ListItemIcon>
                    <HiHome color="#F76776" size={18} />
                </ListItemIcon>
                <ListItemText>Inicio</ListItemText>
            </MenuItem>
            <MenuItem sx={{ color: "#F76776", "&:hover": { background: "#F5B4BB" } }} onClick={handleClose}>
                <ListItemIcon>
                    <MdDeliveryDining color="#F76776" size={18} />
                </ListItemIcon>
                <ListItemText>Mis Pedidos</ListItemText>
            </MenuItem>
            <MenuItem sx={{ color: "#F76776", "&:hover": { background: "#F5B4BB" } }} onClick={handleClose}>
                <ListItemIcon>
                    <BiSupport color="#F76776" size={18} />
                </ListItemIcon>
                <ListItemText>Ayuda en Línea</ListItemText>
            </MenuItem>
            <MenuItem sx={{ color: "#F76776", "&:hover": { background: "#F5B4BB" } }} onClick={handleClose}>
                <ListItemIcon>
                    <IoSettings color="#F76776" size={18} />
                </ListItemIcon>
                <ListItemText>Configuración</ListItemText>
            </MenuItem>
            <MenuItem sx={{ color: "#F76776", "&:hover": { background: "#F5B4BB" } }} onClick={handleClose}>
                <ListItemIcon>
                    <CgLogOff color="#F76776" size={18} />
                </ListItemIcon>
                <ListItemText>{auth ? "Cerrar Sesión" : "Ingresar/Registrarse"}</ListItemText>
            </MenuItem>
        </Menu>
    )
};


/*------------------------------------------------RESPONSIVE DROPDOWN COMPONENT FOR NAVBAR----------------------------------*/

interface ResponsiveDropdownProps {
    menuIsOpen: boolean,
    auth: Auth | null,
}

const ResponsiveDropdown = ({ menuIsOpen, auth }: ResponsiveDropdownProps) => {
    return (
        <div style={{ height: menuIsOpen ? "calc(100% - 64px)" : "0" }} className={styles.menu}>

            <div className={styles.menu_top}>

                {auth && <div className={styles.vertical_avatar}>
                    <Avatar alt="avatar" sx={{ bgcolor: "#FFFFFF", color: "#F76776", width: 32, height: 32, fontSize: "0.8rem" }}>NA</Avatar>
                    <h4>Nombre y Apellido</h4>
                </div>}

                <List sx={{ width: "100%" }}>

                    <ResponsiveDropdownItem text="Inicio" icon={<HiHome color="#FFFFFF" size={25} />} />
                    {auth && <ResponsiveDropdownItem text="Mis Pedidos" icon={<MdDeliveryDining color={"#FFFFFF"} size={20} />} />}
                    <ResponsiveDropdownItem text="Ayuda en Línea" icon={<BiSupport color="#FFFFFF" size={20} />} />

                </List>
            </div>


            <div className={styles.menu_bottom}>
                {auth && <ResponsiveDropdownItem text={"Configuración"} icon={<IoSettings color={"#FFFFFF"} size={20} />} />}
                <ResponsiveDropdownItem text={auth ? "Cerrar Sesión" : "Ingresar/Registrarse"} icon={auth ? <CgLogOff color="#FFFFFF" size={23} /> : <CgLogIn color="#FFFFFF" size={20} />} />
            </div>

        </div>
    )
};


/*-------------------------------------RESPONSIVE DROPDOWN ITEM COMPONENT FOR RESPONSIVE DROPDOWN--------------------------*/

interface ResponsiveDropdownItemProps {
    text: string,
    icon?: React.ReactNode,
    redirectTo?: string,
};

const ResponsiveDropdownItem = ({ text, icon, redirectTo }: ResponsiveDropdownItemProps) => {
    return (
        <ListItem sx={{ color: "#FFFFFF", "&:hover": { background: "#F9A7B0" } }} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    )
};

export default Navbar;