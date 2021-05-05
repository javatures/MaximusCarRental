import React from 'react';
import ReactDOM from 'react-dom';
import AdminDashboard from '../AdminDashboard';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AdminDashboard></AdminDashboard>, div);
})

it("renders admindashboard renders correctly", () => {
    const {getByTestId} = render(<AdminDashboard></AdminDashboard>);
    expect(getByTestId('admindashboard')).toHaveTextContent("Add New Car");
})