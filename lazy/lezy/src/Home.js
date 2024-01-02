import React from 'react'
import { Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Row>
                <Link to="/home/admin">Admin</Link>
        </Row>
        <Row>
                <Link to="/home/user">User</Link>
        </Row>
        <Outlet/>
    </div>
  )
}

export default Home
