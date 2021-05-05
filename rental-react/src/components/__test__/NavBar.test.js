import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavBar';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NavBar></NavBar>, div);
})

it("renders navbar renders correctly", () => {
    const {getByTestId} = render(<NavBar></NavBar>);
    expect(getByTestId('navbar')).toHaveTextContent("Maximus");
})