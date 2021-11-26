import React from 'react'

import cx from 'classnames'

import { Login } from 'src/components/Login'

import css from './Home.styles.module.scss'

export const Home = () => (
  <div className={css.container}>
    <span className={cx(css.text)}>Welcome!</span>

    <Login />
  </div>
)
