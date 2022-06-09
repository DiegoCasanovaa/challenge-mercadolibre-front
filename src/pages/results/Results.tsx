import { Divider } from '@mui/material'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { useGetArticlesBySearch } from '../../hooks/useGetArticlesBySearch'
import { articlesAll, items } from '../../model/articles'
import { searchAtom } from '../../recoil/searchAtom'
import { ResultItem } from './ResultItem'

export const Results = () => {

  const search = useRecoilValue(searchAtom)
  const {articles, handleGetArticlesBySearch} = useGetArticlesBySearch()

  useEffect(() => {

    handleGetArticlesBySearch(search)

  }, [search])
  
  return (
    <div style={{ width:'100%', display:'flex', justifyContent:'center' , marginTop:50}}>
      {
        articles.items.length !== 1 &&
        <div style={{ width:'100%', maxWidth:800, backgroundColor:'white', border:'1px solid #c7c3c3', borderRadius:15, height:'auto', padding:'1rem'}}>
          {
            articles.items.map( (article:items, idx) =>{

              return (
                <>
                  
                    <ResultItem article={article} key={String(article.id)} />
                  {
                    idx !== articles.items.length -1 &&
                    <Divider />
                  }
                </>
              )
            })
          }
        </div>
      }
    </div>
  )
}
