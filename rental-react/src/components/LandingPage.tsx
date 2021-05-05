import { FC } from 'react';
import { Container, Button, Accordion, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const LandingPage: FC<{}> = (): JSX.Element => {
    let history = useHistory();

    return (
        <Container>
            <h1>Welcome to Maximus Car Rental</h1>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            What is Maximus Car Rental?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Maximus Car Rental is an application where renters can create accounts to reserve cars that admins have posted for usage.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            What exactly can a renter do?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <ul>
                                <li>Create accounts</li>
                                <li>Login to those accounts</li>
                                <li>Make a reservation for a car for a period of time</li>
                                <li>Logout</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            What exactly can an admin do?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <ul>
                                <li>Create accounts</li>
                                <li>Login to those accounts</li>
                                <li>Add new cars to the rental service</li>
                                <li>View all created accounts</li>
                                <li>View all cars for rent</li>
                                <li>Logout</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Who created Maximus Car Rental?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            Max Lee: <a href="https://github.com/MaxL-Rev">Github link</a><br />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
        </Container>
    )
}

export default LandingPage;