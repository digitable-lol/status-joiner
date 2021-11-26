import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

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
        </Routes>
      </div>
    </BrowserRouter>
  )
}
