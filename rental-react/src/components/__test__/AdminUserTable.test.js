import React from 'react';
import ReactDOM from 'react-dom';
import AdminUserTable from '../AdminUserTable';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AdminUserTable></AdminUserTable>, div);
})

it("renders adminusertable renders correctly", () => {
    const {getByTestId} = render(<AdminUserTable></AdminUserTable>);
    expect(getByTestId('adminusertable')).toHaveTextContent("User Id");
})