import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {Navbar} from './Navbar'

function Header(){
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                 BOOKSTECA
            </Typography>
            <Navbar/>
          </Toolbar>
        </AppBar>
      </Box>
    </>
    )
}

export {Header}