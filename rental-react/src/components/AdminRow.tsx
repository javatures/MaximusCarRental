import React, { FC, useState, useCallback } from 'react';

const AdminRow: FC<{}> = (): JSX.Element => {
    const [userId, setUserId] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [fName, setfName] = React.useState("");
    const [lName, setlName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneString, setPhoneString] = React.useState("");

    return (
        <div data-testid="adminrow">
            <ul>
                <li>{userId}</li>
                <li>{username}</li>
                <li>{fName}</li>
                <li>{lName}</li>
                <li>{email}</li>
                <li>{phoneString}</li>
            </ul>
        </div>
    );
}

export default AdminRow;