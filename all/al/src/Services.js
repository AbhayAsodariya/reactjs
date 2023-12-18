import React from 'react'
import {Link} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

function Services() {
  return (
    <div>

        <Row>
                <Col>
                        <Link to="/service1">Service-1</Link>
                </Col>
                <Col>
                        <Link to="/service2">Service-2</Link>
                </Col>
                <Col>
                        <Link to="/service3">Service-3</Link>
                </Col>
        </Row>
      
    </div>
  )
}

export default Services


