import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

function Services() {
  return (
    <div>

        <Row>
                <Col>
                        <Link to="/services/service1">Service-1</Link>
                </Col>
                <Col>
                        <Link to="/services/service2">Service-2</Link>
                </Col>
                <Col>
                        <Link to="/services/service3">Service-3</Link>
                </Col>
        </Row>
        <Outlet/>
      
    </div>
  )
}

export default Services


