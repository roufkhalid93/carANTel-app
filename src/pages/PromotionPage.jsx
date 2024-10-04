import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../components/Footer';
import ClassicCard2 from '../components/ClassicCard2';
import ClassicCard4 from '../components/ClassicCard4';
import VintageCard4 from '../components/VintageCard4';
import VeteranCard4 from '../components/VeteranCard4';
import { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider';

export default function PromotionPage() {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="/" style={{ color: '#E97451' }}>car<strong style={{ color: 'white' }}>ANT</strong>el</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/promotion" style={{ color: '#FFDEAD' }}><strong>Promotion</strong></Nav.Link>
                        <Nav.Link href="/aboutus" style={{ color: '#E97451' }}>About Us</Nav.Link>
                        <Nav.Link href="/profile" style={{ color: '#E97451' }}>Profile</Nav.Link>
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
                <h5 className="d-flex justify-content-center mb-3 mt-3" style={{ color: '#880808' }}><strong>Classic & Modern Classic</strong></h5>
                <Container className="d-flex align-items-start row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-3">
                    <ClassicCard2 />
                    <ClassicCard4 />
                    <VintageCard4 />
                    <VeteranCard4 />
                    {/* use href instead of onclick */}
                </Container>
            </Container>
            <Footer />
        </div>
    )
}