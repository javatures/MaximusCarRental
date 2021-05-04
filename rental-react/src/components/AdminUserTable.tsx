import { FC, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

interface User {
    id: number;
    username: string;
    password: string;
    fname: string;
    lname: string;
    email: string;
    phoneString: string;
    admin: boolean;
}

const AdminUserTable: FC<{}> = (): JSX.Element => {
    const [users, setUsers] = useState(Array<User>());

    useEffect(() => {
        fetch('http://localhost:8080/users')
        .then(response => response.json())
        .then(json => {
            setUsers(json);
        })
    }, [])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone #</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneString}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default AdminUserTable;