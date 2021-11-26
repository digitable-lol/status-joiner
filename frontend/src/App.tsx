import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { CardStatus } from 'src/components/CardStatus'
import { Connectors } from 'src/containers/Connectors'
import { Home } from 'src/containers/Home'

import css from './styles.module.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <div className={css.wrapper}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connectors" element={<Connectors />} />
          <Route path="/status" element={<CardStatus />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
