import React from 'react'

import { Col, Container, Row, Image } from 'react-bootstrap'

import css from './WindowIcon.styles.module.scss'

export const WindowIcon = () => {
  return (
    <div className={css.container}>
      <Container>
        <Row>
          <Col>
            <Image src="#" />
          </Col>
          <Col>
            <Image src="#" />
          </Col>
          <Col>
            <Image src="#" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src="#" />
          </Col>
          <Col>
            <Image src="#" />
          </Col>
          <Col>
            <Image src="#" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
