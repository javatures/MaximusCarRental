import React, { FC, useEffect, useState, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Container';
import DisplayAvailable from './DisplayAvailableCars';
import CurrentUser from './CurrentUser';
import CarHomepage from './CarHomepage';
import {Tab , Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReservationForm: FC<{}> = (): JSX.Element => {
    const [pickupdate, setPickupdate] = React.useState("");
    const[dropoffdate, setDropoffdate] = React.useState("");
    const[carid, setCar] = React.useState("");


    const handleSubmit = (e: React.FormEvent) =>{
        console.log("sumbitted");

        e.preventDefault();
        let user = CurrentUser.getUser();
        let pickup = pickupdate;
        let dropoff = dropoffdate;
        console.log(carid);
        console.log(user);


    }


    return (
        <div>
        <Form data-testid="reservationform" onSubmit={handleSubmit}>
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
