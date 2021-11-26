import React from 'react'

import { FloatingLabel, Form } from 'react-bootstrap'

import css from './CardStatus.styles.module.scss'

export const CardStatus = () => {
  return (
    <div className={css.container}>
      <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
    </div>
  )
}
