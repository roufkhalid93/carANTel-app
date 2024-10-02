import Container from 'react-bootstrap/Container';
import { Button, Nav, Navbar, Card, Form, Modal } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
import { getAuth, updateProfile, updateEmail } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import Footer from '../components/Footer';
import { toast } from "react-toastify";
import axios from 'axios';
import { CardText, Col, Row } from "react-bootstrap";
import { jwtDecode } from 'jwt-decode';


export default function ProfilePage() {

    const navigate = useNavigate();
    const [photoUrl, setPhotoUrl] = useState('https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg');
    const { currentUser } = useContext(AuthContext);
    // const userId = currentUser ? currentUser.uid : null;

    const [imagePreview, setImagePreview] = useState(null);
    const [isProfilePicChanged, setIsProfilePicChanged] = useState(false);
    const [changeDetail, setChangeDetail] = useState(false);
    const auth = getAuth();
    const [profileName, setProfileName] = useState(currentUser?.displayName || '')
    const [email, setEmail] = useState(currentUser?.displayName || '');

    useEffect(() => {
        if (!currentUser) {
            navigate('/signin');
        } else if (currentUser?.photoURL) {
            setPhotoUrl(currentUser.photoURL);
        }
    }, [currentUser, navigate]);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setIsProfilePicChanged(true);
        };
        reader.readAsDataURL(file);
    };

    const uploadProfilePicture = async (file) => {
        if (!currentUser) return;
        const userId = currentUser.uid;
        const storageRef = ref(storage, `profilePictures/${userId}`);
        const snapshot = await uploadBytes(storageRef, file);
        const photoURL = await getDownloadURL(snapshot.ref);
        return photoURL;
    };

    const submitChanges = async () => {
        try {
            let updatedPhotoURL = currentUser.photoURL;
            if (isProfilePicChanged && imagePreview) {
                const file = await fetch(imagePreview).then(r => r.blob());
                updatedPhotoURL = await uploadProfilePicture(file);
            }

            // Update in Firebase Auth
            await updateProfile(auth.currentUser, {
                displayName: profileName, //update displayname
                photoURL: updatedPhotoURL
            });

            if (email !== currentUser.email) {
                await updateEmail(auth.currentUser, email);
            }

            // Update UI with new values after submission
            setPhotoUrl(updatedPhotoURL);
            setProfileName(auth.currentUser.displayName);
            setEmail(auth.currentUser.email);

            // } catch (error) {
            //     toast.error("Failed to update the profile details.");
        } catch (error) {
            console.error('Error updating profile:', error);
        } finally {
            setIsProfilePicChanged(false);
            setImagePreview(null);
        }
    };

    const handleImageUpload = () => {
        document.getElementById('fileInput').click();
    };

    //merge previous profile page to this one
    //handle login verification/logout
    //  const auth = getAuth();
    //  const navigate = useNavigate();
    //  const { currentUser } = useContext(AuthContext);

    //Navigate to /login if user is not authenticated
    useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        }
    }, [currentUser, navigate])



    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate("/login"); //Navigate to /login after successful logout
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    //handle display listing
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get('https://53b16e34-1f19-495d-9c5e-94a4070baf7d-00-1ke16n7vtkuda.kirk.replit.dev/listings');
                setListings(response.data);
            } catch (error) {
                console.error("Error", error.message)
            }
        };

        fetchListings()
    }, []);

    //update listing
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentListing, setCurrentListing] = useState({});

    const handleEditClick = (listing) => { //handle edit button
        setCurrentListing(listing);
        setShowEditModal(true);
    };

    const handleChange = (e) => {  //handle form change
        const { name, value } = e.target;
        setCurrentListing({
            ...currentListing,
            [name]: value
        });
    };

    const handleSaveChanges = async () => {
        try {
            await axios.put(`https://53b16e34-1f19-495d-9c5e-94a4070baf7d-00-1ke16n7vtkuda.kirk.replit.dev/listings/${currentListing.id}`, currentListing)
            setShowEditModal(false);
            //refresh the listings
            const response = await axios.get('https://53b16e34-1f19-495d-9c5e-94a4070baf7d-00-1ke16n7vtkuda.kirk.replit.dev/listings');
            setListings(response.data);

            toast.success('Listing updated successfully!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                style: { fontFamily: 'Segoe UI, sans-serif', fontSize: '1rem' }
            });
        } catch (error) {
            console.error("Error updating listing", error);
        }
    };

    //delete listing
    const handleDelete = async (listingId) => {
        const token = localStorage.getItem("authToken")
        const decode = jwtDecode(token)
        const userId = decode.id

        const data = {
            user_id: userId
        };

        try {
            await axios.delete(`https://53b16e34-1f19-495d-9c5e-94a4070baf7d-00-1ke16n7vtkuda.kirk.replit.dev/listings/${listingId}`, data)
            //remove the deleted listing from the state
            setListings((prevListings) => prevListings.filter((listing) => listing.id !== listingId));
        } catch (error) {
            console.log("Error", error);
        }
    };





    return (
        <div>
            <Navbar className="navbar mb-3">
                <Container>
                    <Navbar.Brand href="/" style={{ color: '#E97451' }}>car<strong style={{ color: 'white' }}>ANT</strong>el</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/promotion" style={{ color: '#E97451' }}>Promotion</Nav.Link>
                        <Nav.Link href="/aboutus" style={{ color: '#E97451' }}>About Us</Nav.Link>
                        <Nav.Link href="/profile" style={{ color: '#FFDEAD' }}><strong>Profile</strong></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ backgroundColor: 'white', minHeight: '100vh', color: 'black' }}>
                <Container>
                    <Card style={{ width: '550px', height: 'auto', margin: '0 auto', backgroundColor: '#FFDEAD' }}>
                        <Card.Body>
                            <Card.Title className="d-flex display-4 mb-1 mt-1 justify-content-center" style={{ marginTop: '2rem' }}>My Profile</Card.Title>
                            <Form>
                                <Form.Group>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        className="d-none"
                                        onChange={handleImageChange}
                                        accept=".jpeg, .png, .jpg"
                                        disabled={!changeDetail}
                                    />
                                    <div className="d-flex justify-content-center">
                                        <div
                                            className="position-relative"
                                            style={{ width: '400px', height: '400px' }}
                                            onClick={handleImageUpload}
                                        >
                                            {imagePreview ?
                                                <img src={imagePreview} className="w-100 h-100 object-fit-cover" alt="Profile Preview" style={{ padding: '30px' }} />
                                                : currentUser.photoURL ? (
                                                    <img src={currentUser.photoURL} className="w-100 h-100 object-fit-cover" alt="Profile" style={{ padding: '30px' }} />
                                                ) : (
                                                    <img src={photoUrl} className="w-100 h-100 object-fit-cover" alt="Default Profile" style={{ padding: '30px' }} />
                                                )
                                            }
                                            {changeDetail && (
                                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                                                    <span className="text-white fs-5">Upload Profile Pic</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Form.Group>

                                {/* Conditionally Render Profile Name and Email */}
                                <div className="text-center mt-1">
                                    <h3>{profileName}</h3>
                                    <p>{email}</p>
                                </div>


                                {/* Form Group for Username and email (editable) */}
                                {changeDetail && (
                                    <>
                                        <Form.Group className="mt-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Add username"
                                                value={profileName}
                                                onChange={(e) => setProfileName(e.target.value)}
                                            />
                                        </Form.Group>
                                        {/* Form Group for Email */}
                                        <Form.Group className="mt-3">
                                            <Form.Control
                                                type="email"
                                                placeholder="Add email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>
                                    </>
                                )}
                            </Form>
                            <div className="d-flex justify-content-center mt-3 gap-3">
                                <Button
                                    variant="dark"
                                    style={{ width: '20%' }}
                                    onClick={() => {
                                        changeDetail && submitChanges();
                                        setChangeDetail(prevState => !prevState);
                                    }}
                                >
                                    {changeDetail ? "Save" : "Edit Profile"}
                                </Button>
                                <Button
                                    variant="danger"
                                    style={{ width: '20%' }}
                                    onClick={handleLogout}
                                >
                                    Sign Out
                                </Button>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <Button
                                    style={{ width: '60%', backgroundColor: '#8B4513', border: 'none' }}
                                    href='/createlisting'>
                                    <strong>Advertise your vehicle</strong>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <div>
                        <h4 className=' d-flex justify-content-center mt-2 mb-2'>Your Listings:</h4>
                        {listings.map((listing) => (
                            <Card className="mb-2" key={listing.id} style={{ backgroundColor: '#ECFFDC', width: 'auto', height: '180px', margin: '0 auto' }}>
                                <Card.Body className="card-body-grey">
                                    <Row className="justify-content-center">
                                        <Col xs={12} md={2} className="d-flex align-items-center">
                                            <Card.Img
                                                className="card-img-custom"
                                                variant="top"
                                                src={listing.images}
                                                style={{
                                                    width: '100%',            // Make the image take the full width of the column
                                                    height: '140px',         // Set a fixed height for the image
                                                    objectFit: 'cover',      // Crop the image to fill the area while maintaining aspect ratio
                                                }}
                                            />
                                        </Col>
                                        <Col xs={12} md={10}>
                                            <Row style={{ backgroundColor: '#FFE5B4', borderRadius: '8px' }}>
                                                <Col xs={2}>
                                                    <Card.Text className="card-text-custom"><strong>Model:</strong></Card.Text>
                                                </Col>
                                                <Col xs={10}>
                                                    <Card.Text className="card-text-custom d-flex justify-content-center" style={{ color: '#8B4513' }}><strong>{listing.model}</strong></Card.Text>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <CardText className="card-text-custom mb=0"><strong>Status:</strong></CardText>
                                                    <CardText className="card-text-custom mb=0"><strong>Transmission:</strong></CardText>
                                                </Col>
                                                <Col>
                                                    <CardText className="card-text-custom">{listing.sell_or_rent}</CardText>
                                                    <CardText className="card-text-custom">{listing.transmission}</CardText>
                                                </Col>
                                                <Col>
                                                    <CardText className="card-text-custom"><strong>Brand:</strong></CardText>
                                                    <CardText className="card-text-custom"><strong>Year:</strong></CardText>
                                                </Col>
                                                <Col>
                                                    <CardText className="card-text-custom">{listing.brand}</CardText>
                                                    <CardText className="card-text-custom">{listing.year}</CardText>
                                                </Col>
                                                <Col className="card-column-grey">
                                                    <CardText className="card-text-custom"><strong>Name:</strong></CardText>
                                                    <CardText className="card-text-custom"><strong>Phone no:</strong></CardText>
                                                </Col>
                                                <Col className="card-column-grey">
                                                    <CardText>{listing.name}</CardText>
                                                    <CardText>{listing.phone_number}</CardText>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="d-flex justify-content-start mt-2">
                                                    <Button
                                                        variant="secondary"
                                                        className="me-2"
                                                        onClick={() => handleEditClick(listing)}
                                                        style={{
                                                            height: '30px',           // Fixed height
                                                            fontSize: '12px',         // Reduce font size
                                                            lineHeight: '20px',       // Match line height to button height
                                                            display: 'flex',          // Use flexbox to align items
                                                            alignItems: 'center',     // Center align the text and icon
                                                            padding: '0 5px'          // Reduce padding
                                                        }}
                                                    >
                                                        <i className="bi bi-pencil-square" style={{ fontSize: '16px', marginRight: '3px' }}></i>
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => handleDelete(listing.id)}
                                                        style={{
                                                            height: '30px',           // Fixed height
                                                            fontSize: '12px',         // Reduce font size
                                                            lineHeight: '20px',       // Match line height to button height
                                                            display: 'flex',          // Use flexbox to align items
                                                            alignItems: 'center',     // Center align the text and icon
                                                            padding: '0 5px'          // Reduce padding
                                                        }}
                                                    >
                                                        <i className="bi bi-trash-fill" style={{ fontSize: '16px', marginRight: '3px' }}></i>
                                                        Delete
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>

                    {/* Edit Modal  */}
                    <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                        <Modal.Header closeButton style={{ backgroundColor: '#880808' }}>
                            <Modal.Title style={{ color: '#FFDEAD' }}>Edit Listing</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: '#FFDEAD' }}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formSellRent">
                                    <Form.Label>Sell/Rent</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="sell_or_rent"
                                        value={currentListing.sell_or_rent}
                                        onChange={handleChange}
                                    >
                                        <option value="Sell">Sell</option>
                                        <option value="Rent Out">Rent Out</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBrand">
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="brand"
                                        value={currentListing.brand}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formModel">
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="model"
                                        value={currentListing.model}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formYear">
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="year"
                                        value={currentListing.year}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formTransmission">
                                    <Form.Label>Transmission</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="transmission"
                                        value={currentListing.transmission}
                                        onChange={handleChange}
                                    >
                                        <option value="Auto">Auto</option>
                                        <option value="Manual">Manual</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={currentListing.name}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone_number"
                                        value={currentListing.phone_number}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: '#FFDEAD' }}>
                            <Button variant="danger" onClick={() => setShowEditModal(false)}>
                                Close
                            </Button>
                            <Button variant="success" onClick={handleSaveChanges}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
            <Footer />
        </div>
    )
}