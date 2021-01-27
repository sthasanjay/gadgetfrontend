import React,{useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../../../css/home.css";
import Account from '../Account';

const HomeBanner = () => {
    const[open, setOpen] = useState(false);
    const onOpenModal = ()=>setOpen(true);
    const onCloseModal = ()=>setOpen(false);
    return (
        <>
             <Container fluid>
            <Row>
                <Col>
                    <div className = "home-banner flex-css">
                        <div className = "heading text-center">
                            <span>3GAG</span>
                            <p>Gadgets for lifestyle</p>
                            <button onClick = {onOpenModal}>Sign up</button>
                            <Modal open = {open} onClose = {onCloseModal} center>

                                <Account closeModal = {onCloseModal}/>
                            </Modal>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default HomeBanner
