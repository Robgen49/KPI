import * as React from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, Button, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useDispatch, useSelector } from 'react-redux'
import { setModalTrue } from '../features/ModalSlice'
import { setCards } from '../features/CardsSlice';

const drawerWidth = 200;

function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const cards = useSelector(state => state.cards.value)
    const [searchQuery, setSearchQuery] = React.useState('')

    const dispatch = useDispatch()

    React.useMemo( () => {
        let cardsArray = []
        for (const key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue
            }
            cardsArray.push(JSON.parse(localStorage.getItem(key)))
        }
        dispatch(setCards(cardsArray.filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()))))
    }, [searchQuery])

    const handleSearch = event => {
        setSearchQuery(event.target.value)
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

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
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}
                    >
                        KPI
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mr: 10}}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField size='small' onChange={handleSearch} id="input-with-sx" label="Поиск сотрудника" variant="outlined" />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                        <Button onClick={handleOpenModal} variant='outlined' size='large' sx={{ mr: 2, fontWeight: 'bold', letterSpacing: 2 }} startIcon={<AddCircleOutlineIcon />}>
                            Добавить сотрудника
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box position={'fixed'} component="nav">
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