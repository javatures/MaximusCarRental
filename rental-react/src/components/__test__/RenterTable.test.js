import React from 'react';
import ReactDOM from 'react-dom';
import RenterTable from '../RenterTable';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RenterTable></RenterTable>, div);
})