import React, { useState } from 'react'
import { articlesAll, initialValues } from '../model/articles'
import { getArticlesBySearch } from '../services/search'

export const useGetArticlesBySearch = () => {

    const [articles, setArticles] = useState<articlesAll>(initialValues)

    const handleGetArticlesBySearch = (search:string)=>{

        getArticlesBySearch(search).then( response =>{
            setArticles(response.data)
        } )
    }
    return {articles, handleGetArticlesBySearch}
}
