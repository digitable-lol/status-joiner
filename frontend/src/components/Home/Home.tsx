import React from 'react'

import cx from 'classnames'

import { Button } from 'react-bootstrap'

import css from './Home.styles.module.scss'

export const Home = () => (
  <div className={css.container}>
    <span className={cx(css.text)}>Добро пожаловать!</span>
    <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}>
      Войти
    </Button>
  </div>
)
