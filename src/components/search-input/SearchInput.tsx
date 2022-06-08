import React, { useState } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import searchIcon from '../../assets/ic_Search.png'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { searchAtom } from '../../recoil/searchAtom'

export const SearchInput = () => {

   const [search, setSearch] = useRecoilState(searchAtom);
   const [value, setValue] = useState('');

   const navigate = useNavigate()
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
        sx={{ width:'50%', 
            '& .MuiInputBase-root': {
                padding: '0.3rem',
                height: 35,
                backgroundColor:'white'
            }
        }}
        value={value}
        onChange={(event)=>{
            setValue(event.target.value)
         }}
        onKeyDown={ (event)=>{
            if(event.key === 'Enter'){
                event.preventDefault()
                setSearch(value)
                navigate({
                    pathname:'/items',
                    search:`?search=${value}`
                })
            } 
        }}
        placeholder='Nunca dejes de buscar'
    />
  )

}
