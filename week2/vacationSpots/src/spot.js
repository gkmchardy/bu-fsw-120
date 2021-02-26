import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Spot(props) {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="cell" style={{backgroundColor:props.bgcolor, color:props.color}}>{props.place}</Col>
                    <Col className="cell"  style={{backgroundColor:props.bgcolor, color:props.color}}>{props.price > 12000 ? '$$$' : props.price > 10000 && props.price < 15000 ? '$$' : '$'}</Col>
                    <Col className="cell"  style={{backgroundColor:props.bgcolor, color:props.color}}> {props.timeToGo}</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Spot