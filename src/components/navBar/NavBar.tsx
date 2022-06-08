import React from 'react'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import mercadoLibreLogo from '../../assets/Logo_ML.png'
import { SearchInput } from '../search-input/SearchInput'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {

  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ display:'flex', backgroundColor:'#FFE600'}}>
        <Toolbar style={{ display:'flex', justifyContent:'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={ ()=> navigate('/')}
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
