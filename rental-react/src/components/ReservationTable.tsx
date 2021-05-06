import { FC, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import CurrentUser from './CurrentUser';

interface Car {
    id: number;
    make: string;
    model: string;
    type: string;
    year: string;
    renterId: number;
}

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

interface Reservation {
    id: number;
    pickUp: Date;
    dropOff: Date;
    car: Car;
    user: User;
}

const ReservationTable: FC<{}> = (): JSX.Element => {
    const [reservations, setReservations] = useState(Array<Reservation>());

    useEffect(() => {
        fetch('http://localhost:8080/reservation')
        .then(response => response.json())
        .then(json => {
            setReservations(json);
            if(!CurrentUser.isAdmin())
            {
                setReservations(r => reservations.filter(reservation => reservation.user.id === CurrentUser.getUser().id));
            }
        })

        
    }, [reservations])

    return (
        <Table striped bordered hover data-testid="adminusertable">
            <thead>
                <tr>
                    <th>Reservation ID</th>
                    <th>Pick Up Date</th>
                    <th>Drop off Date</th>
                    <th>Car Make</th>
                    <th>Car Model</th>
                    {CurrentUser.isAdmin() && 
                        <th>User ID</th>
                    }
                </tr>
            </thead>
            <tbody>
                {reservations.map((reservation, index) => (
                    <tr key={index}>
                        <td>{reservation.id}</td>
                        <td>{reservation.pickUp}</td>
                        <td>{reservation.dropOff}</td>
                        <td>{reservation.car.make}</td>
                        <td>{reservation.car.model}</td>
                        <td>{reservation.car}</td>
                        {CurrentUser.isAdmin() && 
                            <td>{reservation.user.id}</td>
                        }
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ReservationTable;