import React from 'react';
import ReactDOM from 'react-dom';
import CarHomepage from '../CarHomepage';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CarHomepage></CarHomepage>, div);
})