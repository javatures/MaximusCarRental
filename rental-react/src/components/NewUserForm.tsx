import React, { FC, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router';

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

const NewUserForm: FC<{ adminStatusChanged: Function, userLoggedIn: Function}> = ( props ): JSX.Element => {
    let history = useHistory();
    const [users, setUsers] = React.useState(Array<User>());
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneString, setPhoneString] = React.useState("");
    const [admin, setAdmin] = React.useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/users')
        .then(response => response.json())
        .then(json => {
            setUsers(json);
        })
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        //check users and see if username is unique

        let newUser = { username: username, password: password, fname: fname, lname: lname, email: email, phoneString: phoneString, admin: admin };
        let myJson = JSON.stringify(newUser);

        fetch("http://localhost:8080/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: myJson
        }).then((response) => {
            console.log(response);
            props.adminStatusChanged(admin);
            props.userLoggedIn(true);
            history.push("/makeReservation");
        })
    }

    return (
        <Container data-testid="newuserform">
            <Form onSubmit={handleSubmit}>
                <h1>Create a new Account</h1>

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="fname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="lname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="phoneString">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" value={phoneString} onChange={(e) => setPhoneString(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="admin">
                    <Form.Label className="mb-2">Admin Status</Form.Label>
                    <Form.Check name="admin" type="radio" label="True" value="true" onChange={(e) => setAdmin(true)} />
                    <Form.Check name="admin" type="radio" label="False" value="false" onChange={(e) => setAdmin(false)} />
                </Form.Group>

                <Button type="submit">Create Account</Button>
            </Form>
        </Container>
    )
}

export default NewUserForm;