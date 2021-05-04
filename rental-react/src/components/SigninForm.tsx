import React, { FC, useState, useEffect } from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CurrentUser from './CurrentUser';

interface User {
    id: number;
    username: string;
    password: string;
    fname: string;
    lname: string;
    email: string;
    phoneString: string;
    admin: boolean;
}

const SigninForm: FC<{}> = (): JSX.Element => {
    let history = useHistory();
    const [users, setUsers] = useState(Array<User>());
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        users.forEach(user => {
            if(user.username === username && user.password === password)
            {
                CurrentUser.setUser(user);
                console.log(CurrentUser.getUser());
                history.push("/cars");
            }
        });
        console.log(users);
        console.log(username, password);
    }

    useEffect(() => {
        fetch('http://localhost:8080/users')
        .then(response => response.json())
        .then(json => {
            setUsers(json);
        })
    }, [])

    return(
        <Container data-testid="siginform">
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button type="submit">Login</Button>
            </Form>
        </Container>
    )
}

export default SigninForm;