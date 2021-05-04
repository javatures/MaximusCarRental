import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavBar';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NavBar></NavBar>, div);
})