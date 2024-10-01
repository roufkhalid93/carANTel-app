import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export default function ForgotPassword() {
    return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <div>
                <Form>
                    <h3 className="text-center mb-4"><strong>Forgot Password</strong></h3>
                    <FormGroup className="mb-2" controlId="UserEmail">
                        <FormLabel>Email address</FormLabel>
                        <FormControl type="email" placeholder="Enter your email" />
                    </FormGroup>

                    <div className="d-flex justify-content-between mb-4">
                        <Form.Text>Yet to have an account? <a href="signup">Register</a></Form.Text>
                    </div>
                    <Button className="btn btn-primary w-100">Send Reset Password</Button>
                    <br />
                    <br />
                    <div className="text-center mb-4">OR</div>
                    <Button className="rounded-pill w-100 mb-2" variant="outline-dark">
                        <i className="bi bi-google"></i> Continue with Google
                    </Button>
                    <Button className="rounded-pill w-100 mb-2" variant="outline-dark">
                        <i className="bi bi-facebook"></i> Continue with Facebook
                    </Button>
                </Form>
            </div>
        </Container>
    );
}