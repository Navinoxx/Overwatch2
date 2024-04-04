import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import navLogo from '@/assets/logos/Overwatch2_Primary_DKBKGD_compressed.svg';
import navName from '@/assets/logos/Masthead_Overwatch2_Logo.webp';
import '@fontsource/roboto/700.css';

const pages = ['Informacion', 'Heroes', 'Modos', 'Mapas'];

export const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
    <Box component="header">
        <AppBar component="nav" sx={{ borderRadius: {xs: 0, md: '0.5rem'}, m: {xs: 0, md: 2}, position:'absolute', width: {xs: '100%', md: '98%'} }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box 
                    sx={{ pt: 1, width: '3rem'}}>
                        <Link to="/"> 
                            <img src={navLogo} alt="logo" />
                        </Link>
                    </Box>
                    <Box
                    sx={{
                        pt: 1,
                        mx: 2,
                        display: { xs: 'none', sm: 'flex' },
                    }}
                    >
                    <Link to="/">  
                        <img src={navName} alt="Overwatch 2" width={200} />
                    </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
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
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Link to={page} style={{ textDecoration: 'none', color: 'black' }}>
                                    <Typography textAlign="center">{page}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                        {pages.map((page) => (
                        <Link to={page.toLowerCase()} key={page} style={{ textDecoration: 'none' }}>
                            <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ color: 'white', display: 'block', fontSize: 20, fontFamily: 'Roboto' }}
                        >
                        {page}
                        </Button>
                        </Link>        
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
    );
}