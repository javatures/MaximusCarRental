import React from 'react';
import ReactDOM from 'react-dom';
import AdminCarTable from '../AdminCarTable';
import { isTSAnyKeyword } from '@babel/types';

import { getByTestId, render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AdminCarTable></AdminCarTable>, div);
})

it("renders admincartable renders correctly", () => {
    const {getByTestId} = render(<AdminCarTable></AdminCarTable>);
    expect(getByTestId('admincartable')).toHaveTextContent("Car Id");
})