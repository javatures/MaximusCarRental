import React from 'react';
import ReactDOM from 'react-dom';
import CarCard from '../CarCard';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    const car = {
        id : 1,
        make : "Mercury",
        model : "Grand Marquis",
        type : "Mid Size",
        year : "2010"
    }
    ReactDOM.render(<CarCard car></CarCard>, div);
})

it("renders carcard renders correctly", () => {
    const car = {
        id : 1,
        make : "Mercury",
        model : "Grand Marquis",
        type : "Mid Size",
        year : "2010"
    }
    const {getByTestId} = render(<CarCard car></CarCard>);
    expect(getByTestId('carcard')).toHaveTextContent("Car Make");
})