import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import "../../../css/home.css";

const HomeBanner = () => {
    return (
        <>
             <Container fluid>
            <Row>
                <Col>
                    <div className = "home-banner flex-css">
                        <div className = "heading text-center">
                            <span>3GAG</span>
                            <p>Gadgets for lifestyle</p>
                            <button>Sign up</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default HomeBanner
