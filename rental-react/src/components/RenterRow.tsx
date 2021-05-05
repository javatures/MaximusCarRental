import React, { FC, useState, useEffect} from 'react';

const RenterRow: FC<{}> = (): JSX.Element => {
    const [userId, setUserId] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [fName, setfName] = React.useState("");
    const [lName, setlName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneString, setPhoneString] = React.useState("");

    // Second argument of [] is used to prevent multiple calls to useEffect
    useEffect(() => {
        let renterArray = [];
        //Call to back end for data and logs to console
        let renter = fetch('localhost:8080/renter')
                        .then(res => res.json())
                        .then(data => console.log(data))
    }, []);

    //Takes an array and builds a li for each element of the array
    let buildLi = (arr : any) => {
        arr.forEach((el : any) => {
        <li>{el.id}</li>;
        <li>{el.username}</li>;
        <li>{el.fname}</li>;
        <li>{el.lname}</li>;
        <li>{el.email}</li>;
        <li>{el.phonestring}</li>;
        })
    }

    return (
        <div data-testid="renterrow">
            <ul>
                {buildLi}
            </ul>
        </div>
    );
}

export default RenterRow;