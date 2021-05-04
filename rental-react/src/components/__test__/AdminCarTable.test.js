import React from 'react';
import ReactDOM from 'react-dom';
import AdminCarTable from '../AdminCarTable';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AdminCarTable></AdminCarTable>, div);
})