import React from 'react';
import ReactDOM from 'react-dom';
import CarCard from '../CarCard';
import { isTSAnyKeyword } from '@babel/types';

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