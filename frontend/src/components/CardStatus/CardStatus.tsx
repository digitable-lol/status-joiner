import React from 'react'

import cx from 'classnames'

import { FloatingLabel, Form } from 'react-bootstrap'

import css from './CardStatus.styles.module.scss'

export const CardStatus = () => {
  return (
    <div className={css.container}>
      <FloatingLabel controlId="floatingTextarea" label="В ведите ваш статус" className="mb-3">
        <Form.Control className={cx(css.item)} as="textarea" placeholder="В ведите ваш статус" />
      </FloatingLabel>
    </div>
  )
}
