import React from 'react';
import ReactDOM from 'react-dom';
import NewCarForm from '../NewCarForm';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewCarForm></NewCarForm>, div);
})

it("renders newcarform renders correctly", () => {
    const {getByTestId} = render(<NewCarForm></NewCarForm>);
    expect(getByTestId('newcarform')).toHaveTextContent("Add a New Rental Car");
})