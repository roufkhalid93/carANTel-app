import { Button, Card, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

//firebase signup
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function SignupPage() {
    // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext)

    // useEffect(() => {
    //     if (currentUser) navigate("/login");
    // }, [currentUser, navigate]);


    // const handleSignUp = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await createUserWithEmailAndPassword(
    //             auth,
    //             // username,
    //             email,
    //             password
    //         );
    //         console.log(res.user);
    //         toast.success('Account created successfully!', {
    //             position: "bottom-center",
    //             autoClose: 1000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             theme: "dark",
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const provider = new GoogleAuthProvider();
    // const handleGoogleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await signInWithPopup(auth, provider);
    //         toast.success('Account created successfully!', {
    //             position: "bottom-center",
    //             autoClose: 1000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             theme: "dark",
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    useEffect(() => {
        if (currentUser) navigate("/");
    }, [currentUser, navigate]);

    // Email/Password Signup
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;

            // Fetch and store token
            const token = await user.getIdToken(true); // Force fresh token
            localStorage.setItem("authToken", token);
            console.log("Token stored in local storage:", token);

            toast.success("Account created successfully!", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            navigate("/"); // Redirect to homepage after signup
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error("Signup failed. Please try again.", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    };

    // Google Sign-In
    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider);
            const user = res.user;

            // Fetch and store token
            const token = await user.getIdToken(true); // Force fresh token
            localStorage.setItem("authToken", token);
            console.log("Token stored in local storage:", token);

            toast.success("Account created successfully!", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            navigate("/"); // Redirect to homepage after signup
        } catch (error) {
            console.error("Error during Google sign-in:", error);
            toast.error("Google sign-in failed. Please try again.", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    };

    return (
        <div style={{
            backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2FAlfa_Romeo_33_Stradale.jpg?alt=media&token=fd50db8b-3fd0-4ce5-b19d-e0537356e28a")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
        }}>
            <Container className="d-flex align-items-center justify-content-center vh-100">
                <Card className="p-5" style={{ backgroundColor: '#FFFDD0' }}>
                    <Form>
                        <h3 className="text-center mb-4"><strong>Sign Up</strong></h3>
                        <FormGroup className="mb-2" controlId="UserUsername">
                            <FormLabel>Username</FormLabel>
                            <FormControl type="username" placeholder="Enter your username" />
                        </FormGroup>

                        <FormGroup className="mb-2" controlId="UserEmail">
                            <FormLabel>Email address</FormLabel>
                            <FormControl type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                        </FormGroup>

                        <FormGroup className="mb-2" controlId="UserPassword">
                            <FormLabel>Password</FormLabel>
                            <div className="input-group">
                                <FormControl
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ backgroundColor: 'white' }}
                                >
                                    {showPassword ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}
                                </Button>
                            </div>
                        </FormGroup>

                        <div className="d-flex justify-content-between mb-4">
                            <Form.Text>Already have an account? <a href="login" style={{ color: '#A52A2A' }}>Sign In</a></Form.Text>
                        </div>
                        <Button className="rounded-pill w-100 mb-2" style={{ backgroundColor: '#A52A2A', border: 'none' }} onClick={handleSignUp}>Sign Up</Button>

                        <br />
                        <br />
                        <div className="text-center mb-4">OR</div>
                        <Button className="rounded-pill w-100 mb-2" variant="outline-dark" style={{ backgroundColor: '#A52A2A', border: 'none', color: 'white' }} onClick={handleGoogleLogin}>
                            <i className="bi bi-google"></i>oogle
                        </Button>
                        <h7 className="d-flex justify-content-end mt-3"><strong style={{ color: '#E97451' }}> car<strong style={{ color: '#880808' }}>ANT</strong>el</strong></h7>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}