import React from 'react';
import ReactDOM from 'react-dom';
import ReservationForm from '../ReservationForm';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ReservationForm></ReservationForm>, div);
})

it("renders reservationform correctly", () => {
    const {getByTestId} = render(<ReservationForm></ReservationForm>);
    expect(getByTestId('reservationform')).toHaveTextContent("Pick Up Date");
})