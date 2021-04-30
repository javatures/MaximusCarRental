import React, { FC, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';

const RenterForm: FC<{}> = (): JSX.Element => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneString, setPhoneString] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("username", username);
        formData.append("password", password);
        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("email", email);
        formData.append("phone", phoneString);

        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:8080/renter");
        request.send(formData);
        console.log(username, password);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <label htmlFor="fname">First Name</label>
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)}/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="phone">Phone Number</label>
                <input type="phone" value={phoneString} onChange={(e) => setPhoneString(e.target.value)}/>

                <input className="btn btn-primary" type="submit" value="Log In" />
            </div>
        </form>
    )
}

export default RenterForm;