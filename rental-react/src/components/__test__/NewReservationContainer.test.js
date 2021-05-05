import React from 'react';
import ReactDOM from 'react-dom';
import NewReservationContainer from '../NewReservationContainer';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewReservationContainer></NewReservationContainer>, div);
})

it("renders newreservationcontainer renders correctly", () => {
    const {getByTestId} = render(<NewReservationContainer></NewReservationContainer>);
    expect(getByTestId('newreservationcontainer')).toHaveTextContent("Make a Reservation");
})