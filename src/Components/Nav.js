// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
// import AdbIcon from '@mui/icons-material/Adb';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faUserAstronaut)



//https://fontawesome.com/docs
// https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu

const pages = [
    { text: 'Feed', href: '/Feed' },
    { text: 'News', href: '/News' },
    { text: 'Functional Component Test', href: '/test' },
    { text: 'Doing', href: '/Doing' },
    { text: 'To Do', href: '/ToDo' },
    { text: 'Poke', href: '/pokemonlist' }
];
const yourPages = [
    { text: 'Feed', to: '/feed' },
    { text: 'News', to: '/news' },
    { text: 'Func Comp Test', to: '/test' },
    { text: 'Doing', to: '/Doing' },
    { text: 'To Do', to: '/ToDo' },
    { text: 'Poke', to: '/pokemonlist' }
];
const settings = [
    { text: 'Feed', href: '/Feed' },
    { text: 'Login', href: '/Login' },
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (

        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    {/* <FontAwesomeIcon icon="user-astronaut" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}>
                        {/* LOGO! */}
                        <FontAwesomeIcon icon="user-astronaut" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}>

                            {/* // sx={{
                            //     display: { xs: 'block', md: 'none', textDecoration: 'none', color: 'inherit' },
                            // }} */}
                        

                            {/* SIDE DROPDOWN MENU */}
                            {yourPages.map((page) => (
                                
                                    // {/* <Link to={page.to} underline="none">
                                    //     <Typography textAlign="center" color='inherit' >{page.text}</Typography>
                                    // </Link> */}
                                    <Button
                                        key={page.text}
                                        to={page.to}
                                        component={Link}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'inherit', display: 'block', textDecoration: 'none' }}
                                    >{page.text}
                                </Button>
                            ))}
                        </Menu>
                    </Box>


                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        {/* minimized logo  */}
                        <FontAwesomeIcon icon="user-astronaut" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.text}
                                to={page.href}
                                component={Link}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'inherit', display: 'block', textDecoration: 'none' }}
                            >
                                {page.text}
                            </Button>
                        ))}

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </IconButton> */}
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenUserMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>

                        {/* SETTINGS MENU */}
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}>
                                
                        {settings.map((page) => (
                                // <MenuItem key={page.text} onClick={handleCloseUserMenu}>
                                //     <Link to={page.href} underline="none">
                                //     <Typography textAlign="center">{page.text}</Typography>
                                //     </Link>
                                // </MenuItem>
                            <Button
                                key={page.text}
                                to={page.href}
                                component={Link}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'inherit', display: 'block', textDecoration: 'none' }}
                            >{page.text}
                            </Button>
                            ))}
                        </Menu>


                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default ResponsiveAppBar;

