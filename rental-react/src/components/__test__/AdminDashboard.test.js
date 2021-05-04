import React from 'react';
import ReactDOM from 'react-dom';
import AdminDashboard from '../AdminDashboard';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AdminDashboard></AdminDashboard>, div);
})