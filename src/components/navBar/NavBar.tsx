import React from 'react'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import mercadoLibreLogo from '../../assets/Logo_ML.png'
import { SearchInput } from '../search-input/SearchInput'

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ display:'flex', backgroundColor:'#FFE600'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
                src={`${mercadoLibreLogo}`}
                alt='mercadolibre'
                style={{ width:50 }}
            />
          </IconButton>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
