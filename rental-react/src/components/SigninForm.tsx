import React, { FC, useState, useEffect } from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CurrentUser from './CurrentUser';

interface Renter {
    id: number;
    username: string;
    password: string;
    fname: string;
    lname: string;
    email: string;
    phoneString: string;
}

const SigninForm: FC<{}> = (): JSX.Element => {
    let history = useHistory();
    const [renters, setRenters] = useState(Array<Renter>());
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        renters.forEach(renter => {
            if(renter.username === username && renter.password === password)
            {
                CurrentUser.setRenter(renter);
                console.log(CurrentUser.getRenter());
                history.push("/cars");
            }
        });
        console.log(renters);
        console.log(username, password);
    }

    useEffect(() => {
        fetch('http://localhost:8080/renter')
        .then(response => response.json())
        .then(json => {
            setRenters(json);
        })
    }, [])

    return(
        <Container>
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