import React from 'react';
import ReactDOM from 'react-dom';
import AdminRow from '../AdminRow';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AdminRow></AdminRow>, div);
})