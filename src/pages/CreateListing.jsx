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


    // // //handle post listing
    // const handleSave = async () => {
    //     //get stored JWT token
    //     const token = localStorage.getItem("authToken");
    //     console.log(token)

    //     //Decode the token to fetch the userid
    //     const decode = jwtDecode(token);
    //     const userId = decode.id

    //     let imageUrl = "";

    //     // start
    //     if (postImages) {
    //         const imageRef = ref(storage, `images/${postImages.name}`);
    //         await uploadBytes(imageRef, postImages);
    //         imageUrl = await getDownloadURL(imageRef);
    //     }

    //     const data = {
    //         sell_or_rent: postSellRent,
    //         brand: postBrand,
    //         model: postModel,
    //         year: postYear,
    //         transmission: postTransmission,
    //         images: imageUrl,
    //         name: postName,
    //         phone_number: postPhoneNumber,
    //         user_id: userId
    //     };

    //     axios
    //         .post("https://api-render-io-ayy1.onrender.com/listings", data)
    //         .then((response) => {
    //             console.log("Success:", response.data);

    //             toast.success('Listing created successfully!', {
    //                 position: "bottom-center",
    //                 autoClose: 1000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 theme: "dark",
    //             });

    //             setTimeout(() => {
    //                 navigate('/profile');
    //             }, 1000); //redirect to the profile page once submit listing
    //         })
    //         .catch((error) => {
    //             console.log("Error", error);

    //             toast.error('Failed to create the listing.', {
    //                 position: "bottom-center",
    //                 autoClose: 1000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 theme: "dark",
    //             });
    //         });

    // }

    // const handleImageChange = (e) => {
    //     setPostImages(e.target.files[0]);
    // };
    // // end
    // -----------
    // //test new code
    // // Function to check if the user is logged in and retrieve userId
    const getUserId = () => {
        const token = localStorage.getItem("authToken");

        if (!token) {
            console.error("Token is missing from localStorage.");
            // If no token is found, redirect to the login page
            toast.error("Please log in to create a listing.", { position: "top-center" });
            navigate("/login");
            return null;
        }

        try {
            // Decode the token and get the user ID
            const decodedToken = jwtDecode(token);
            console.log("Decoded Firebase Token:", decodedToken);

            const userId = decodedToken.uid || decodedToken.user_id || decodedToken.sub;
            if (!userId) {
                console.warn("User ID not found in the token. Full token:", decodedToken);
                return null;
            }
            return userId;
        } catch (error) {
            console.error("Failed to decode token:", error);
            // If token is invalid, redirect to the login page
            toast.error("Invalid token. Please log in again.", { position: "top-center" });
            navigate("/login");
            return null;
        }
    };

    // Handle post listing
    const handleSave = async () => {
        // Get the user ID by calling getUserId
        const userId = getUserId();
        if (!userId) {
            console.error("No user ID found. Aborting handleSave.");
            return; // Exit if there's no user ID (user is not logged in)
        }

        console.log("User ID retrieved:", userId);

        let imageUrl = "";

        // Upload image if it exists
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
            .post("https://api-render-io-ayy1.onrender.com/listings", data)
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
                }, 1000); // Redirect to the profile page once the listing is submitted
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
    };

    const handleImageChange = (e) => {
        setPostImages(e.target.files[0]);
    };
    // -----


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
                            placeholder="eg: Porshe, Lamborghini, Ford etc"
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