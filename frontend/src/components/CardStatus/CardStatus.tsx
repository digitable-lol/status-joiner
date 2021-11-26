import React from 'react'

import cx from 'classnames'

import { FloatingLabel, Form } from 'react-bootstrap'

import css from './CardStatus.styles.module.scss'

export const CardStatus = () => {
  return (
    <div className={css.container}>
      <FloatingLabel controlId="floatingTextarea" label="Comments" className={cx('mb-3', css.block)}>
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>

      <div className={cx('mb-3', css.item)}>
        <button className={cx(css.text, css.btn)}>Approve</button>
      </div>
    </div>
  )
}
