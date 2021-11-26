import React from 'react'

import cx from 'classnames'

import { Button } from 'react-bootstrap'

import { Image } from 'src/components/Image'

import css from './Connectors.styles.module.scss'

export const Connectors = () => {
  return (
    <div className={css.container}>
      <div className={cx(css.header)}>
        <span className={cx(css.status, css.text)}>Set status</span>
      </div>
      <div className={cx(css.block)}>
        <Button variant="secondary" size="lg" className={cx(css.btn)}>
          <Image src="/images/instagram.svg" />
        </Button>
        <Button variant="secondary" size="lg" className={cx(css.btn)}>
          <Image src="/images/slack.svg" />
        </Button>
        <Button variant="secondary" size="lg" className={cx(css.btn)}>
          <Image src="/images/teams.svg" />
        </Button>
        <Button variant="secondary" size="lg" className={cx(css.btn)}>
          <Image src="/images/vkontakte.svg" />
        </Button>
        <Button variant="secondary" size="lg" className={cx(css.btn)}>
          <Image src="/images/discord.svg" />
        </Button>
      </div>
    </div>
  )
}
