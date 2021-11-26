import React from 'react'

import cx from 'classnames'

import { Button } from 'react-bootstrap'

import css from './WindowIcon.styles.module.scss'

export const WindowIcon = () => {
  return (
    <div className={css.container}>
      <div className={cx(css.header)}>
        <span className={cx(css.status, css.text)}>Поставьте статус</span>
      </div>
      <div className={cx(css.block)}>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
      </div>
    </div>
  )
}
