import React, { useState } from 'react'
import { article, initialValuesItem } from '../model/articles'
import { getArticleById } from '../services/article'

export const useGetArticlesById = () => {

    const [article, setArticle] = useState<article>(initialValuesItem)

    const handleGetArticleById = (id:string) =>{

        getArticleById(id).then( response => setArticle(response.data))
    }

    return { article, handleGetArticleById }
}
