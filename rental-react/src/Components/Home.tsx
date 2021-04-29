import React, { FC, useState, useCallback } from 'react';

const SigninForm: FC<{}> = (): JSX.Element => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(username, password);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="username">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </form>
    )
}

export default SigninForm;