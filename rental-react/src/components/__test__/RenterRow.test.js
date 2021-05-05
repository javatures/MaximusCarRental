import React from 'react';
import ReactDOM from 'react-dom';
import RenterRow from '../RenterRow';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RenterRow></RenterRow>, div);
})

// it("renders renterrow correctly", () => {
//     const {getByTestId} = render(<RenterRow></RenterRow>);
//      expect(getByTestId('renterrow')).toBeTruthy();
// })