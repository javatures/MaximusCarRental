import React from 'react';
import ReactDOM from 'react-dom';
import CarHomepage from '../CarHomepage';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CarHomepage></CarHomepage>, div);
})

it("renders carhomepage renders correctly", () => {
    const {getByTestId} = render(<CarHomepage></CarHomepage>);
    expect(getByTestId('carhomepage')).toBeTruthy();
})