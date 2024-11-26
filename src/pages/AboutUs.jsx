import { Nav, Navbar, Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import MapComponent from '../components/MapComponent';
import { useState } from 'react';
import Footer from '../components/Footer';
import '../App.css';
import { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider';



export default function AboutUs() {
    const { currentUser } = useContext(AuthContext);

    const [showContact, setShowContact] = useState(false);

    const handleShowContact = () => setShowContact(true);
    const handleCloseContact = () => setShowContact(false);

    const [showEmail, setShowEmail] = useState(false);

    const handleShowEmail = () => setShowEmail(true);
    const handleCloseEmail = () => setShowEmail(false);

    const [showAddress, setShowAddress] = useState(false);

    const handleShowAddress = () => setShowAddress(true);
    const handleCloseAddress = () => setShowAddress(false);


    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="/" style={{ color: '#E97451' }}>car<strong style={{ color: 'white' }}>ANT</strong>el</Navbar.Brand>
                    <Nav className="me-auto">
                        {currentUser && (
                            <Nav.Link href="/promotion" style={{ color: '#E97451' }}>Promotion</Nav.Link>
                        )}
                        <Nav.Link href="/aboutus"><strong style={{ color: '#FFDEAD' }}>About us</strong></Nav.Link>
                        {currentUser && (
                            <Nav.Link href="/profile" style={{ color: '#E97451' }}>Profile</Nav.Link>
                        )}
                    </Nav>
                    <Nav className="ms-auto">
                        {/* Only show the Sign Up/Login link if the user is not logged in */}
                        {!currentUser && (
                            <Nav.Link href="/login" style={{ color: '#E97451' }}>Sign Up/Login</Nav.Link>
                        )}
                    </Nav>
                </Container>
            </Navbar>

            <Container className="mt-4 flex-grow-1">
                <Row>
                    <Col md={7}>
                        <h4 style={{ color: '#E97451' }}><strong>car<strong style={{ color: '#880808' }}>ANT</strong>el</strong></h4>
                        <Card className="p-3 mb-3">
                            <Card.Body style={{ backgroundColor: '#F2D2BD' }}>
                                <h5 style={{ color: '#8B4513' }}>About Us</h5>
                                <strong >car<strong style={{ color: '#880808' }}>ANT</strong>el</strong> is a leading Southeast Asian platform that specialized in the buying and selling classic and vintage cars. Founded in 2024, the start-up company has rapidly grown one become one of the larget and most trusted online car trading platforms in the region.
                                {/* It has received significant investments to grow its operations, enhance its technology, and improve its customer service. The company aims to redefine the used car market in the region by making the buying and selling process as smooth and transparent as possible. */}
                            </Card.Body>
                            <Card.Body style={{ backgroundColor: '#F2D2BD' }}>
                                <h5 style={{ color: '#8B4513' }}>What we believe</h5>
                                We believe all travel makes us better. At away, it is not only our job to make every one of those journey more seamless, but our responsibility to make a positive impact on the world. We do this through out products, through the platform we have, and the community we create.
                            </Card.Body>
                        </Card>
                        <Row className="mb-2 d-flex justify-content-start">
                            <Col xs="auto">
                                <Button style={{ backgroundColor: '#8B4513', color: '#E9DCC9' }} variant="light" onClick={handleShowContact}><i className="bi bi-telephone text-white"></i><strong> Contact Us</strong></Button>
                            </Col>
                            <Col xs="auto">
                                <Button style={{ backgroundColor: '#8B4513', color: '#E9DCC9' }} variant="light" onClick={handleShowEmail}><i className="bi bi-envelope text-white"></i><strong> Send Inquiry</strong></Button>
                            </Col>
                            <Col xs="auto">
                                <Button style={{ backgroundColor: '#8B4513', color: '#E9DCC9' }} variant="light" onClick={handleShowAddress}> <i className="bi bi-geo-alt text-white"></i><strong> Our Location</strong></Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5}>
                        <MapComponent />
                    </Col>
                </Row>


                <Modal show={showContact} onHide={handleCloseContact}>
                    <Modal.Header closeButton style={{ backgroundColor: '#F2D2BD' }}>
                        <Modal.Title style={{ color: '#880808' }}>Contact Number</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>You can reach us at: <strong> +60 19 644 6700</strong></p>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#F2D2BD' }}>
                        <Button variant="secondary" onClick={handleCloseContact}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showEmail} onHide={handleCloseEmail}>
                    <Modal.Header closeButton style={{ backgroundColor: '#F2D2BD' }}>
                        <Modal.Title style={{ color: '#880808' }}>Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>You can email us at: <strong> support@carantel.com</strong></p>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#F2D2BD' }}>
                        <Button variant="secondary" onClick={handleCloseEmail}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showAddress} onHide={handleCloseAddress}>
                    <Modal.Header closeButton style={{ backgroundColor: '#F2D2BD' }}>
                        <Modal.Title style={{ color: '#880808' }}>Our Location</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>You can visit us at: </p>
                        <p className='mb-0' style={{ marginLeft: '20px' }}><strong style={{ color: '#E97451' }}> car<strong style={{ color: '#880808' }}>ANT</strong>el</strong> <strong>HQ</strong></p>
                        <p className='mb-0' style={{ marginLeft: '20px' }}>Stairway to Heaven Road,</p>
                        <p className='mb-0' style={{ marginLeft: '20px' }}>Bandar Saujana Putra,</p>
                        <p className='mb-3' style={{ marginLeft: '20px' }}>42610 Jenjarom, Selangor</p>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#F2D2BD' }}>
                        <Button variant="secondary" onClick={handleCloseAddress}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            <Footer />
        </div>
    )
}