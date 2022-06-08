import { Typography } from '@mui/material'
import React from 'react'
import { items } from '../../model/articles'
import shippingImage from '../../assets/ic_shipping@2x.png'
import { useNavigate } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export const ResultItem = ( props: {article:items} ) => {

    const { article } = props
    const navigate = useNavigate()
    return (
        <>
          {
              article &&
              <section className='item' 
                    style={{ display:'flex', width:'100%', justifyContent:'space-between', cursor:'pointer'}}
                    onClick={()=>{ navigate(`/items/${article.id}`)}}>
    
            <section style={{ display:'flex'}}>
              {
                article.picture !== '' &&
                <div id='img' style={{ objectFit:'fill' , height:'100%', padding:'1rem' }}>
                    <img style={{ width:150, height:150,  objectFit:'fill' }} src={`${article.picture}`} alt="itemImage" />
                </div>
              }
    
              <article id='price-title' style={{ display:'flex', flexDirection:'column', marginLeft:10}}>
                <div id='price' style={{ display:'flex', alignItems:'center', marginTop:30}}>
                  {
                      article.price.amount !== 0 &&
                      <Typography sx={{ fontSize:18, fontWeight:600}}>
                        <NumberFormat value={String(article.price.amount)} displayType={'text'} thousandSeparator={true} prefix={'$'} />   
                        </Typography>
                   }
                  {
                      article.free_shipping &&
                      <img src={shippingImage} style={{ marginLeft:3, width:20, height:20 }} alt="shipping" />
                    }
                </div>
                <div id='title'>
                  <Typography sx={{ fontSize:14, fontWeight:400}}> {article.title} </Typography>
                </div>
              </article>
            </section>
    
            <section style={{ marginTop: 40, marginRight:40}}>
              <Typography sx={{ fontSize:10, fontWeight:400, color:'gray'}}> {article.address} </Typography>
            </section>
    
          </section>
        }
        </>
      )
}
