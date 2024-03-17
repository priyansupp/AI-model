import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';


function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [_, setCookie] = useCookies(['userid']);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/auth/register', {
            email: email,
            password: pass,
            username: username,
            name: name
        }).then((response) => {
            const user1 = response.data.user;
            console.log(`User logged in: ${user1.username}`);
            setCookie('userid', user1._id, {path: '/'});
            setCookie('email', user1.email, {path: '/'});
            setCookie('username', user1.username, {path: '/'});
            setCookie('name', user1.name, {path: '/'});
            setCookie('authenticated', true, {path: '/'});
            navigate('/');
        }).catch(e => {
            console.log(`Error: ${e}`);
        })
    }


  return (
    <div style={{width: '100%', height: '100%', position: 'relative', backgroundColor: 'black'}}>
        <Form onSubmit={handleSubmit} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 10%)'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={e => setUsername(e.target.value)} type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={e => setPass(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Register
        </Button>
        <Form.Group className="mb-3">
            <Form.Label>Already have an account: </Form.Label>
            <Link to='/login'><Button>Login</Button></Link>
        </Form.Group>
        </Form>
    </div>
  );
}

export default Register;