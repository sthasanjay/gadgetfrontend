import React from 'react'
import homeFront from "../../../images/static/homeFront/homeFront.jpg";
import { Container, Row, Col} from 'react-bootstrap';
import FrontItemsData from './FrontItemsData';
import FrontItems from './FrontItems';
const HomeFront = () => {
    return (
       <>
        <Container className = "mx-auto">
            <Row>
                <Col>
                    <div className ="home-front mx-auto text-center">
                        <div className = "front-img-container">
                            <img
                                src = {homeFront}
                                alt = "home"
                                className = "front-img img-fluid img-responsive"
                            />
                            <div className = "three-gadgets flex-css">
                                {FrontItemsData.map((value, index)=>{
                                    return (
                                        <>
                                        <FrontItems
                                            key = {index}
                                            img = {value.itemImg}
                                            name = {value.itemName}

                                        />


                                        </>
                                    )
                                })}
                            </div>
                                
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
       </>
    )
}

export default HomeFront
