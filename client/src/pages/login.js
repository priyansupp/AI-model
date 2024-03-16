import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../context/authContext';

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cookie, setCookie] = useCookies(['userid']);
    const { setIsAuthenticated } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/auth/login', {
            email: email,
            password: pass
        }).then((response) => {
            console.log(`User logged in: ${response.data}`);
            setCookie('userid', response.data['userid'], {path: '/'});
            setIsAuthenticated(true);
            navigate('/');
        }).catch(e => {
            console.log(`Error: ${e}`);
        })
    }

    return (
        <div style={{width: '100%', height: '100%', position: 'relative', backgroundColor: 'black'}}>
            <Form onSubmit={handleSubmit} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 50%)'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" />
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