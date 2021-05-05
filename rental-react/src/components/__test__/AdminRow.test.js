import React from 'react';
import ReactDOM from 'react-dom';
import AdminRow from '../AdminRow';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AdminRow></AdminRow>, div);
})

it("renders adminrow renders correctly", () => {
    const {getByTestId} = render(<AdminRow></AdminRow>);
    expect(getByTestId('adminrow')).toBeTruthy();
})