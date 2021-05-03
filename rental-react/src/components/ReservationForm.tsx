import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';

const ReservationForm: FC<{}> = (): JSX.Element => {
    const [pickupdate, setPickupdate] = React.useState("");
    const[dropoffdate, setDropoffdate] = React.useState("");
    const[cartype, setCartype] = React.useState("");




    return (
        <Form>
            <Row>
            <Col>
                <Form.Group controlId="pickupdata">
                    <Form.Label>Pick Up Date</Form.Label>
                    <Form.Control type="date" value={pickupdate} onChange={(e) => setPickupdate(e.target.value)}/>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="dropoffdate">
                    <Form.Label>Enter Drop Off Date</Form.Label>
                    <Form.Control type="date" value={dropoffdate} onChange={(e) => setDropoffdate(e.target.value)}/>
                </Form.Group>
            </Col>
            </Row>
            <Row>
                <Form.Group id="cartype">
                    <Form.Label>Select Vehicle Type</Form.Label>
                    <Form.Control as="select" onChange={(e) => setCartype(e.target.value)}>
                        <option value="Select">Select...</option>
                        <option value="Economy">Economy</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Sport">Sport</option>
                        <option value="Towing and Hauling">Towing and Hauling</option>
                    </Form.Control>
                </Form.Group>

            </Row>
        </Form>
    )
}
export default ReservationForm;
