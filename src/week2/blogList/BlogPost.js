import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

function BlogPost(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <p style={{color:"black", fontSize:"20px", textAlign:"left", fontWeight:"900"}}>{props.title}</p>
                        <p style={{color:"black", fontSize:"16px", textAlign:"left"}}>{props.subTitle}</p>
                        <p style={{color:"black", fontStyle:"italic", textAlign:"left"}}>Posted by <b>{props.author}</b> on {props.date}</p>
                        <hr />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default BlogPost