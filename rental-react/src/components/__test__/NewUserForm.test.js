import React from 'react';
import ReactDOM from 'react-dom';
import NewUserForm from '../NewUserForm';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewUserForm></NewUserForm>, div);
})

it("renders newuserform renders correctly", () => {
    const {getByTestId} = render(<NewUserForm></NewUserForm>);
    expect(getByTestId('newuserform')).toHaveTextContent("Create a new Account");
})