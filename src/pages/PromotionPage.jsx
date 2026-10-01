import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../components/Footer';
import CarGrid from '../components/CarGrid';
import { cars } from '../data/cars';
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
            <Container className="mt-4 pt-3 flex-grow-1">
                <CarGrid title="Promotions" cars={cars.filter((car) => car.promotion)} />
            </Container>
            <Footer />
        </div>
    )
}