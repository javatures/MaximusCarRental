import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const RenterForm: FC<{}> = (): JSX.Element => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneString, setPhoneString] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let newRenter = { username: username, password: password, fname: fname, lname: lname, email: email, phoneString: phoneString };
        let myJson = JSON.stringify(newRenter);

        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:8080/renter");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.setRequestHeader("Access-Control-Allow-Origin", "*");
        request.send(myJson);
    }

    return (
        <Container>
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

                <Button type="submit">Create Account</Button>
            </Form>
        </Container>
    )
}

export default RenterForm;