import { Button, Card, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

//firebase authentication
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";





export default function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext)


    useEffect(() => {
        if (currentUser) navigate("/");
    }, [currentUser, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            const user = userCredential.user;

            // Fetch a fresh token and store it
            const token = await user.getIdToken(true); // Force a fresh token
            localStorage.setItem("authToken", token);
            console.log("Token stored in local storage:", token);

            navigate("/"); // Redirect after successful login
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };



    return (
        <div style={{
            backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2FAlfa-Romeo-33-Stradale-10.jpeg?alt=media&token=ea1e427f-8807-4303-8c39-a156f4446881")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
        }}>
            <Container className="d-flex align-items-center justify-content-center vh-100">
                <Card className="p-5" style={{ backgroundColor: '#FFFDD0' }}>
                    <Form>
                        <h3 className="text-center mb-4"><strong>Sign In</strong></h3>
                        <FormGroup className="mb-2" controlId="UserEmail">
                            <FormLabel>Email address</FormLabel>
                            <FormControl
                                type="email"
                                placeholder="Enter your email"
                                onChange={(e) => setUsername(e.target.value)}
                            />
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
                            <Form.Text>Yet to have an account? <a href="signup">Register</a></Form.Text>
                        </div>
                        <Button className="rounded-pill w-100 mb-2" style={{ backgroundColor: '#A52A2A', border: 'none', color: 'white' }} onClick={handleLogin}>Log In</Button>
                        <h5 className="d-flex justify-content-end mt-3"><strong style={{ color: '#E97451' }}> car<strong style={{ color: '#880808' }}>ANT</strong>el</strong></h5>
                        <br />

                    </Form>
                </Card>
            </Container>
        </div>
    );
}