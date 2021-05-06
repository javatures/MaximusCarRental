import React, { FC, useEffect, useState, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Container';
import DisplayAvailable from './DisplayAvailableCars';
import CurrentUser from './CurrentUser';
import CarHomepage from './CarHomepage';
import {Tab , Tabs, TabList, TabPanel} from 'react-tabs';
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
    const[dropoffdate, setDropoffdate] = React.useState("");
    const[carid, setCar] = React.useState(0);


    const handleSubmit2 = async (e: React.FormEvent) => {
        e.preventDefault();
        let user: User = CurrentUser.getUser();
        let response = await fetch('http://localhost:8080/car/' + carid);
        let car = await response.json();

        let newReservation = {pickUp: pickupdate, dropOff: dropoffdate, car: car, user: user};
        let myJson = JSON.stringify(newReservation);
        console.log(myJson);
        console.log(user.id);
        
        console.log(carid);

        await fetch("http://localhost:8080/reservations" , {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json'
            },
            body: myJson
        }).then((response) =>  console.log(response.json()));
    }


    const handleSubmit = async (e: React.FormEvent) =>{
        console.log("sumbitted");

        e.preventDefault();
        let user = CurrentUser.getUser();
        let pickup = pickupdate;
        let dropoff = dropoffdate;
        console.log(carid);
        console.log(user);
        let response = await fetch('http://localhost:8080/car/' + carid);
        let car = await response.json();
        console.log(car);
        let newRes = {pickUp: pickup , dropOff: dropoff , user: user.id ,  car: carid};
        let sentJSON = JSON.stringify(newRes);
        console.log(newRes);

        console.log(sentJSON);

        fetch("http://localhost:8080/reservation" , {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json'
            },
            body: sentJSON
        }).then((response) =>  console.log(response.json()));




    

    }


    return (
        <div>
        <Form data-testid="reservationform" onSubmit={handleSubmit2}>
            <Row>
            
                <Form.Group controlId="pickupdata">
                    <Form.Label>Pick Up Date</Form.Label>
                    <Form.Control required type="date" value={pickupdate} onChange={(e) => setPickupdate(e.target.value)}/>
                </Form.Group>
            
                <Form.Group controlId="dropoffdate">
                    <Form.Label>Enter Drop Off Date</Form.Label>
                    <Form.Control required type="date" value={dropoffdate} onChange={(e) => setDropoffdate(e.target.value)}/>
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
                    <CarHomepage setCar={setCar} />
                </TabPanel>
                <TabPanel>
                    <DisplayAvailable type="Economy" setCar={setCar}/>
                </TabPanel>
                <TabPanel>
                    <DisplayAvailable type="Luxury" setCar={setCar}/>
                </TabPanel>
                <TabPanel>
                    <DisplayAvailable type="Sport" setCar={setCar}/>
                </TabPanel>
                <TabPanel>
                    <DisplayAvailable type="Towing and Hauling" setCar={setCar}/>
                </TabPanel>
            </Tabs>
        
        </Row>
        </Form>
        </div>
    )
}
export default ReservationForm;
