import React from 'react';
import ReactDOM from 'react-dom';
import SigninForm from '../SigninForm';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SigninForm></SigninForm>, div);
})

it("renders signinform correctly", () => {
    const {getByTestId} = render(<SigninForm></SigninForm>);
    expect(getByTestId('signinform')).toHaveTextContent("Login");
})