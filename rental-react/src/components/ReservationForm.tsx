import React, { FC, useEffect, useState, Component } from 'react';
import Button from 'react-bootstrap/Button';
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
    const[cartype, setCartype] = React.useState("");




    return (
        <Form data-testid="reservationform">
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
                {/* <Form.Group id="cartype">
                    <Form.Label>Select Vehicle Type</Form.Label>
                    <Form.Control as="select" onChange={(e) => setCartype(e.target.value)}>
                        <option value="Select">Select...</option>
                        <option value="Economy">Economy</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Sport">Sport</option>
                        <option value="Towing and Hauling">Towing and Hauling</option>
                    </Form.Control>
                </Form.Group> */}
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
                        <CarHomepage />
                    </TabPanel>
                    <TabPanel>
                        <DisplayAvailable type="Economy" />
                    </TabPanel>
                    <TabPanel>
                        <DisplayAvailable type="Luxury" />
                    </TabPanel>
                    <TabPanel>
                        <DisplayAvailable type="Sport" />
                    </TabPanel>
                    <TabPanel>
                        <DisplayAvailable type="Towing and Hauling" />
                    </TabPanel>
                </Tabs>

            </Row>
        </Form>
    )
}
export default ReservationForm;
