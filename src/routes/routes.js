import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Article } from '../pages/article/Article'
import { Results } from '../pages/results/Results'

export const RoutesApp = () => {
  
  return (
      <Routes>
          <Route path="/" />
          <Route path={`/items`} element={<Results />} />
          <Route path="/items/:id" element={<Article />} />
      </Routes>
  )
}
