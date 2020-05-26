import React from "react"
import { UserMenu, MenuItemLink, AppBar, Layout } from "react-admin"
import SettingsIcon from '@material-ui/icons/Settings';

const CustomMenu = ({ ...props }) => {
    const username = localStorage.getItem('username')
    return <UserMenu label="Мой профиль" {...props}>
        <MenuItemLink
            to="/my-profile"
            primaryText={username}
            onClick={()=>{} }
        />
        <MenuItemLink
            to="/my-profile"
            primaryText="Изменить пароль"
            leftIcon={<SettingsIcon />}
        />
    </UserMenu>
}

const MyAppBar = props => <AppBar {...props} userMenu={<CustomMenu />} />;

export default props => <Layout {...props} appBar={MyAppBar} />;
