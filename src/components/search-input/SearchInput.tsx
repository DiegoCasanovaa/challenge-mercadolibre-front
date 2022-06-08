import React, { useState } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import searchIcon from '../../assets/ic_Search.png'
import { useGetArticlesBySearch } from '../../hooks/useGetArticlesBySearch'

export const SearchInput = () => {

   const [search, setSearch] = useState('');
   const [ handleGetArticlesBySearch ] = useGetArticlesBySearch();
  return (
    <TextField
        InputProps={{
        endAdornment: (
            <InputAdornment position="end">
            <img
                src={`${searchIcon}`}
                alt='searchIcon'
                style={{ width:20 }}
            />
            </InputAdornment>
        ),
        }}
        variant="outlined"
        sx={{ width:'100%', 
            '& .MuiInputBase-root': {
                padding: '0.3rem',
                height: 35,
                backgroundColor:'white'
            }
        }}
        value={search}
        onChange={(event)=>{
            setSearch(event.target.value)
         }}
        onKeyDown={ (event)=>{
            if(event.key === 'Enter'){
                event.preventDefault()
                handleGetArticlesBySearch(search)
            } 
        }}
        placeholder='Nunca dejes de buscar'
    />
  )

}
