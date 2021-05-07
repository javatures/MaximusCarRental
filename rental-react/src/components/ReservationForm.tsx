import React, { FC, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Container';
import DisplayAvailable from './DisplayAvailableCars';
import CurrentUser from './CurrentUser';
import CarHomepage from './CarHomepage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface Car {
    id: number;
    make: string;
    model: string;
    type: string;
    year: string;
    renterId: number;
}
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

const ReservationForm: FC<{}> = (): JSX.Element => {
    const [pickupdate, setPickupdate] = React.useState("");
    const [dropoffdate, setDropoffdate] = React.useState("");
    const [car, setCar] = useState({});

    const updateCar = (car: Car) => {
        setCar(car);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let user: User = CurrentUser.getUser();

        let newReservation = { pickUp: pickupdate, dropOff: dropoffdate, car: car, user: user };
        let myJson = JSON.stringify(newReservation);

        fetch("http://localhost:8080/reservations", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: myJson
        }).then((response) => console.log(response.json()));
    }

    return (
        <div>
            <Form data-testid="reservationform" onSubmit={handleSubmit}>
                <Row>

                    <Form.Group controlId="pickupdata">
                        <Form.Label>Pick Up Date</Form.Label>
                        <Form.Control required type="date" value={pickupdate} onChange={(e) => setPickupdate(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="dropoffdate">
                        <Form.Label>Enter Drop Off Date</Form.Label>
                        <Form.Control required type="date" value={dropoffdate} onChange={(e) => setDropoffdate(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row>
                    <Tabs>
                        <TabList>
                            <Tab>All</Tab>
                            <Tab>Ecomony</Tab>
                            <Tab>Luxury</Tab>
                            <Tab>Sport</Tab>
                            <Tab>Towing and Hauling</Tab>
                        </TabList>
                        <TabPanel>
                            <h3>All Vehicles</h3>
                            <CarHomepage setCar={updateCar} />
                        </TabPanel>
                        <TabPanel>
                            <DisplayAvailable type="Economy" setCar={updateCar} />
                        </TabPanel>
                        <TabPanel>
                            <DisplayAvailable type="Luxury" setCar={updateCar} />
                        </TabPanel>
                        <TabPanel>
                            <DisplayAvailable type="Sport" setCar={updateCar} />
                        </TabPanel>
                        <TabPanel>
                            <DisplayAvailable type="Towing and Hauling" setCar={updateCar} />
                        </TabPanel>
                    </Tabs>

                </Row>
            </Form>
        </div>
    )
}
export default ReservationForm;
