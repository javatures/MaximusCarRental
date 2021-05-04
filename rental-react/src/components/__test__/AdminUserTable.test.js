import React from 'react';
import ReactDOM from 'react-dom';
import AdminUserTable from '../AdminUserTable';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AdminUserTable></AdminUserTable>, div);
})