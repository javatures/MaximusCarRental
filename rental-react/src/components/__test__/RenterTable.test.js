import React from 'react';
import ReactDOM from 'react-dom';
import RenterTable from '../RenterTable';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RenterTable></RenterTable>, div);
})

// it("renders rentertable correctly", () => {
//     const {getByTestId} = render(<RenterTable></RenterTable>);
//     expect(getByTestId('rentertable')).toBeTruthy();
// })