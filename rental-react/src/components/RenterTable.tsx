import React, { FC, useState, useEffect} from 'react';
import RenterRow from './RenterRow'

const RenterTable: FC<{}> = (): JSX.Element => {
    const [renters, setRenters] = React.useState("");

    useEffect(() => {
        fetch("localhost:8080/renter")
            .then(res => res.json())
            .then((data) => setRenters(data));
    }, []);
    
    return (
        <div data-testid="rentertable">
            <table>
                <thead>
                    <td>User Id</td>
                    <td>User Name</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>EMail</td>
                    <td>Phone Number</td>
                </thead>
                <tbody>
                    <RenterRow />
                </tbody>
            </table>
        </div>
    );
}

export default RenterTable;

function client(arg0: { method: string; path: string; }) {
    throw new Error('Function not implemented.');
}
