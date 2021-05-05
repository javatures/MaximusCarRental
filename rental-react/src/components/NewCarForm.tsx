import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router';

const NewCarForm: FC<{}> = (): JSX.Element => {
    let history = useHistory();
    const [make, setMake] = React.useState("");
    const [model, setModel] = React.useState("");
    const [year, setYear] = React.useState("");
    const [type, setType] = React.useState("");


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let newCar = { make: make, model: model, year: year, type: type };
        let myJson = JSON.stringify(newCar);

        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:8080/car");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.setRequestHeader("Access-Control-Allow-Origin", "*");
        request.send(myJson);

        history.push("/adminDashboard");
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Add a New Rental Car</h1>

                <Form.Group controlId="make">
                    <Form.Label>Make</Form.Label>
                    <Form.Control type="text" value={make} onChange={(e) => setMake(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="model">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" value={model} onChange={(e) => setModel(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" value={year} onChange={(e) => setYear(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="type">
                    <Form.Label>Select Vehicle Type</Form.Label>
                    <Form.Control as="select" onChange={(e) => setType(e.target.value)}>
                        <option value="Select">Select...</option>
                        <option value="Economy">Economy</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Sport">Sport</option>
                        <option value="Towing and Hauling">Towing and Hauling</option>
                    </Form.Control>
                </Form.Group>

                <Button type="submit">Add Car</Button>
            </Form>
        </Container>
    )
}

export default NewCarForm;