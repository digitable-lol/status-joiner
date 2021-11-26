import React from 'react'

import cx from 'classnames'
import { Link } from 'react-router-dom'

import css from './Login.styles.module.scss'

export const Login = () => (
  <Link to="/connectors" className={cx('btn btn-secondary btn-lg', css.button)}>
    Login
  </Link>
)
