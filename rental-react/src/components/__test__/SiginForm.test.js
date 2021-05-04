import React from 'react';
import ReactDOM from 'react-dom';
import SigninForm from '../SigninForm';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SigninForm></SigninForm>, div);
})