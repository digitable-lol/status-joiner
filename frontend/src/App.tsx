import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from './containers/Home'

import css from './styles.module.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <div className={css.wrapper}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
