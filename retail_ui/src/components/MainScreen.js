import React from 'react'
import { Container, Row } from "react-bootstrap";
import '../styles/MainScreen.css'

const MainScreen = ({title}) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            <h1 className="heading">{title}</h1>
            <hr />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default MainScreen