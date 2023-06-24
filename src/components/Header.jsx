import * as React from 'react';
import {AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useDispatch } from 'react-redux'
import { setModalTrue } from '../features/ModalSlice'

const drawerWidth = 200;

function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const dispatch = useDispatch()

    const handleOpenModal = () => {
        dispatch(setModalTrue())
    }; 

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }} >
                KPI
            </Typography>
            <Divider />
            <List>
                <ListItem key={1}>
                    <Button onClick={handleOpenModal} variant='outlined' sx={{ textAlign: 'center', display: 'flex' }}>
                        <ListItemText primary='Добавить сотрудника' />
                    </Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" component="nav" >
                <Toolbar variant="regular">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        color={'primary.main'}
                        fontWeight={'bold'}
                        fontSize={40}
                        letterSpacing={2}
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md:'block' } }}
                    >
                        KPI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                        <Button onClick={handleOpenModal} variant='outlined' size='large' key={1} sx={{ mr: 2, fontWeight:'bold', letterSpacing:2}} startIcon={<AddCircleOutlineIcon />}>
                            Добавить сотрудника
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;