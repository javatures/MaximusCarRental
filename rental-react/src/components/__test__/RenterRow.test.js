import React from 'react';
import ReactDOM from 'react-dom';
import RenterRow from '../RenterRow';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RenterRow></RenterRow>, div);
})