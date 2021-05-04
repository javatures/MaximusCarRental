import React from 'react';
import ReactDOM from 'react-dom';
import NewCarForm from '../NewCarForm';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewCarForm></NewCarForm>, div);
})