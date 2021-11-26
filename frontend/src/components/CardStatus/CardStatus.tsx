import React from 'react'

import cx from 'classnames'

import css from './CardStatus.styles.module.scss'

export const CardStatus = () => {
  return (
    <div className={css.container}>
      <div className={cx('mb-3', css.item)}>
        <button className={cx(css.text, css.btn)}>Approve</button>
      </div>
    </div>
  )
}
