import React from 'react'

import cx from 'classnames'

import { Button } from 'react-bootstrap'

import { Image } from 'src/components/Image'

import css from './WindowIcon.styles.module.scss'

export const WindowIcon = () => {
  return (
    <div className={css.container}>
      <div className={cx(css.header)}>
        <span className={cx(css.status, css.text)}>Поставьте статус</span>
      </div>
      <div className={cx(css.block)}>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}>
          <Image src="src/components/ImagesSvg/slack.svg" />
        </Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
        <Button variant="secondary" href="/WindowIcon" size="lg" className={cx(css.btn)}></Button>
      </div>
      <Button variant="light" href="/CardStatus" className={cx(css.arrow)}></Button>
    </div>
  )
}
