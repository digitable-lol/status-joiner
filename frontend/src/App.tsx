import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { CardStatus } from 'src/components/CardStatus'
import { Home } from 'src/components/Home'
import { WindowIcon } from 'src/components/WindowIcon'

import css from './styles.module.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <div className={css.wrapper}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/windowicon" element={<WindowIcon />} />
          <Route path="/cardstatus" element={<CardStatus />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
