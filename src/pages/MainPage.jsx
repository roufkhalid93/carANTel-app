import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarGrid from '../components/CarGrid';
import Footer from '../components/Footer';
import { cars, categories } from '../data/cars';
import '../App.css';
import { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider';


export default function MainPage() {
    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="/" style={{ color: '#E97451' }} > <strong>car<strong style={{ color: 'white' }}>ANT</strong>el</strong></Navbar.Brand>
                    <Nav className="me-auto">
                        {currentUser && (
                            <Nav.Link href="/promotion" style={{ color: '#E97451' }}>Promotion</Nav.Link>
                        )}
                        <Nav.Link href="/aboutus" style={{ color: '#E97451' }}>About Us</Nav.Link>
                        {currentUser && (
                            <Nav.Link href="/profile" style={{ color: '#E97451' }}>Profile</Nav.Link>
                        )}
                    </Nav>
                    <Nav className="ms-auto">
                        {!currentUser && (
                            <Nav.Link href="/login" style={{ color: '#E97451' }}>Sign Up/Login</Nav.Link>
                        )}
                    </Nav>
                </Container>
            </Navbar>
            <Container className="pt-4">
                {categories.map((category) => (
                    <CarGrid
                        key={category.id}
                        title={category.label}
                        cars={cars.filter((car) => car.category === category.id)}
                    />
                ))}
            </Container>
            <Footer />
        </div>
    )
}