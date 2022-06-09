import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetArticlesById } from '../../hooks/useGetArticlesById'
import { Typography, Button } from '@mui/material'
import NumberFormat from 'react-number-format'

export const Article = () => {

  const {id} = useParams()
  const { article ,handleGetArticleById } = useGetArticlesById()
  const { items } = article
  useEffect(() => {
    handleGetArticleById(id || '')
  }, [])

  return (
    <div style={{ width:'100%', display:'flex', justifyContent:'center' , marginTop:50}}>
      <div style={{ width:'100%', maxWidth:800, backgroundColor:'white', border:'1px solid #c7c3c3', borderRadius:15, height:'auto', padding:'1rem'}}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr'}}>
          <section id='desc' style={{ display:'flex', flexDirection:'column'}}>
            { items.picture !== "" && <img style={{ width:300 }} src={`${items.picture}`} alt="" />}
            <Typography sx={{ fontSize:18, fontWeight:600 , marginTop:2}}> {items.title} </Typography>
            <Typography sx={{ fontSize:14, fontWeight:400, color:'gray', marginTop:2}}> {items.description} </Typography>
          </section>
          <section id='desc' style={{ display:'flex', flexDirection:'column'}}>
            { items.condition !== "" && 
              <article id='condition' style={{ display:'flex'}}>
              <Typography sx={{ fontSize:10, fontWeight:400, color:'gray', marginRight:1}}> {items.condition === 'new' ? 'Nuevo' : 'Usado'}</Typography>
              <Typography sx={{ fontSize:10, fontWeight:400, color:'gray'}}>-</Typography>
              <Typography sx={{ fontSize:10, fontWeight:400, color:'gray', marginLeft:1}}> {String(items.sold_quantity)} vendidos </Typography>
            </article>
            }
            <article id='condition'>
              <Typography sx={{ fontSize:18, fontWeight:600}}> {items.title}</Typography>
              { items.price.amount !== 0 &&
                <Typography sx={{ fontSize:30, fontWeight:600, marginTop:1}}>
                  <NumberFormat value={String(items.price.amount)} displayType={'text'} thousandSeparator={true} prefix={'$'} />  
                </Typography>
              }
              { items.title !== "" && <Button sx={{ marginTop:2 }} variant='contained' color='primary'> Comprar </Button>}
            </article>
          </section>
        </div>
      </div>
    </div>
  )
}
