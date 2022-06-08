import React, { useState } from 'react'
import { articlesAll } from '../model/articles'
import { getArticlesBySearch } from '../services/search'

export const useGetArticlesBySearch = () => {

    const [articles, setArticles] = useState<articlesAll>()

    const handleGetArticlesBySearch = (search:string)=>{

        getArticlesBySearch(search).then( response => console.log(response) )
    }
    return [handleGetArticlesBySearch]
}
