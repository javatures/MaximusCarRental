import React from 'react';
import ReactDOM from 'react-dom';
import NewUserForm from '../NewUserForm';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewUserForm></NewUserForm>, div);
})