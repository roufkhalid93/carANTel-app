import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ClassicCard1 from '../components/ClassicCard1';
import ClassicCard2 from '../components/ClassicCard2';
import ClassicCard3 from '../components/ClassicCard3';
import ClassicCard4 from '../components/ClassicCard4';
import VintageCard1 from '../components/VintageCard1';
import VintageCard2 from '../components/VintageCard2';
import VintageCard3 from '../components/VintageCard3';
import VintageCard4 from '../components/VintageCard4';
import VeteranCard1 from '../components/VeteranCard1';
import VeteranCard2 from '../components/VeteranCard2';
import VeteranCard3 from '../components/VeteranCard3';
import VeteranCard4 from '../components/VeteranCard4';
import Footer from '../components/Footer';
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
                        {/* Only show the Sign Up/Login link if the user is not logged in */}
                        {!currentUser && (
                            <Nav.Link href="/login" style={{ color: '#E97451' }}>Sign Up/Login</Nav.Link>
                        )}
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <br />
                <h5 className="d-flex justify-content-center mb-3" style={{ color: '#880808' }}><strong>Classic & Modern Classic</strong></h5>
                <Container className="d-flex align-items-start row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-3">
                    <ClassicCard1 />
                    <ClassicCard2 />
                    <ClassicCard3 />
                    <ClassicCard4 />
                </Container>
                <br />
                <h5 className="d-flex justify-content-center mb-3" style={{ color: '#880808' }}><strong>Vintage & Post-Vintage</strong></h5>
                <Container className="d-flex align-items-start row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-3">
                    <VintageCard1 />
                    <VintageCard2 />
                    <VintageCard3 />
                    <VintageCard4 />
                </Container>
                <br />
                <h5 className="d-flex justify-content-center mb-3" style={{ color: '#880808' }}><strong>Veteran</strong></h5>
                <Container className="d-flex align-items-start row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-3">
                    <VeteranCard1 />
                    <VeteranCard2 />
                    <VeteranCard3 />
                    <VeteranCard4 />
                </Container>
            </Container>
            <Footer />
        </div>
    )
}