import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function BlogPost(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6} className="cell">
                        <p style={{fontWeight:"900", fontSize:"18px"}}>{props.title}</p>
                        <p>{props.subTitle}</p>
                        <p style={{fontSize:"10px", fontStyle:"italic"}}>Posted by <b>{props.author}</b> on {props.date}</p>
                        <hr />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default BlogPost