import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '../LandingPage';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LandingPage></LandingPage>, div);
})

it("renders landingpage renders correctly", () => {
    const {getByTestId} = render(<LandingPage></LandingPage>);
    expect(getByTestId('landingpage')).toHaveTextContent("Welcome to Maximus Car Rental");
})