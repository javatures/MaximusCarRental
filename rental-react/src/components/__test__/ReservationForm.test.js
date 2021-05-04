import React from 'react';
import ReactDOM from 'react-dom';
import ReservationForm from '../ReservationForm';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ReservationForm></ReservationForm>, div);
})