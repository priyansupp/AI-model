import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative', backgroundColor: 'black'}}>
        <Form style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 50%)'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
        <Form.Group className="mb-3">
            <Form.Label>Do not have an account: </Form.Label>
            <Link to='/register'><Button>Register</Button></Link>
        </Form.Group>
        </Form>
    </div>
  );
}

export default Login;