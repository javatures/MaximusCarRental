import React from 'react';
import ReactDOM from 'react-dom';
import NewReservationContainer from '../NewReservationContainer';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewReservationContainer></NewReservationContainer>, div);
})