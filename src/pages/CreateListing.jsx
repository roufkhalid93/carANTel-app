// import { useState } from "react";
import { useState } from "react";
import { Nav, Navbar, Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function CreateListing() {
    const [postSellRent, setPostSellRent] = useState("");
    const [postBrand, setPostBrand] = useState("");
    const [postModel, setPostModel] = useState("");
    const [postYear, setPostYear] = useState("");
    const [postTransmission, setPostTransmission] = useState("");
    const [postImages, setPostImages] = useState("");
    const [postName, setPostName] = useState("");
    const [postPhoneNumber, setPostPhoneNumber] = useState("");
    const navigate = useNavigate();


    //handle post listing
    const handleSave = async () => {
        //get stored JWT token
        const token = localStorage.getItem("authToken");
        console.log(token)

        //Decode the token to fetch the userid
        const decode = jwtDecode(token);
        const userId = decode.id

        let imageUrl = "";

        // start
        if (postImages) {
            const imageRef = ref(storage, `images/${postImages.name}`);
            await uploadBytes(imageRef, postImages);
            imageUrl = await getDownloadURL(imageRef);
        }

        const data = {
            sell_or_rent: postSellRent,
            brand: postBrand,
            model: postModel,
            year: postYear,
            transmission: postTransmission,
            images: imageUrl,
            name: postName,
            phone_number: postPhoneNumber,
            user_id: userId
        };

        axios
            .post("https://53b16e34-1f19-495d-9c5e-94a4070baf7d-00-1ke16n7vtkuda.kirk.replit.dev/listings", data)
            .then((response) => {
                console.log("Success:", response.data);

                toast.success('Listing created successfully!', {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });

                setTimeout(() => {
                    navigate('/profile');
                }, 1000); //redirect to the profile page once submit listing
            })
            .catch((error) => {
                console.log("Error", error);

                toast.error('Failed to create the listing.', {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            });

    }

    const handleImageChange = (e) => {
        setPostImages(e.target.files[0]);
    };
    // end

    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="/" style={{ color: '#E97451' }} > <strong>car<strong style={{ color: 'white' }}>ANT</strong>el</strong></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/promotion" style={{ color: '#E97451' }}>Promotion</Nav.Link>
                        <Nav.Link href="/aboutus" style={{ color: '#E97451' }}>About Us</Nav.Link>
                        <Nav.Link href="/profile" style={{ color: '#E97451' }}>Profile</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

            <Container>
                <Form>
                    <h4 className="d-flex justify-content-center mt-3"><strong >Create Listing</strong></h4>
                    <FormGroup className="d-column mb3" controlId="postSellRent">
                        <FormLabel>Sell/Rent</FormLabel>
                        <Form.Select
                            onChange={(e) => setPostSellRent(e.target.value)}
                        >
                            <option></option>
                            <option value="Sell" style={{ color: '#880808' }}>Sell</option>
                            <option value="RentOut" style={{ color: '#880808' }}>Rent Out</option>
                        </Form.Select>
                    </FormGroup>

                    <Form.Group className="d-column mt-3" controlId="postBrand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="eg: Mazda, Honda, Proton etc"
                            onChange={(e) => setPostBrand(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="d-column mt-3" controlId="postModel">
                        <Form.Label>Model</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setPostModel(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="d-column mt-3" controlId="postYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setPostYear(e.target.value)}
                        />
                    </Form.Group>

                    <FormGroup className="d-column mt-3" controlId="postTransmission">
                        <FormLabel>Transmission</FormLabel>
                        <Form.Select
                            onChange={(e) => setPostTransmission(e.target.value)}
                        >
                            <option></option>
                            <option value="Auto" style={{ color: '#880808' }}>Auto</option>
                            <option value="Manual" style={{ color: '#880808' }}>Manual</option>
                        </Form.Select>
                    </FormGroup>

                    <FormGroup className="d-column mt-3" controlId="postImages">
                        <FormLabel>Images</FormLabel>
                        {/* <Form.Text>The first image will be the cover (Max 6, each under 3MB)</Form.Text> */}
                        <FormControl
                            type="file" multiple
                            // onChange={(e) => setPostImages(e.target.value)}
                            onChange={handleImageChange}
                        />
                    </FormGroup>

                    <Form.Group className="d-column mt-3" controlId="postName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setPostName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="d-column mt-3" controlId="postPhoneNumber">
                        <Form.Label>Phone no.</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setPostPhoneNumber(e.target.value)}
                        />
                    </Form.Group>

                    <Button className="btn w-100 d-column mt-3" style={{ backgroundColor: '#880808', border: 'none' }} type="button" onClick={handleSave}> <i className="bi bi-car-front-fill" ></i> Create Listing</Button>

                </Form>
            </Container >
        </>
    )
}