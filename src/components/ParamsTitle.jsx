import * as React from 'react';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function ParamsTitle({ props }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        color={'secondary'}
                        fontWeight={'bold'}
                    >
                        {`${props.title}`}
                    </Typography>
                    <div>
                        <AccountCircle />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}