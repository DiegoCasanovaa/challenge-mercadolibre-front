import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Article } from '../pages/article/Article'
import { Main } from '../pages/main/Main'
import { Results } from '../pages/results/Results'

export const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/items?search=:search" element={<Results />} />
        <Route path="/items/:id" element={<Article />} />
    </Routes>
  )
}
