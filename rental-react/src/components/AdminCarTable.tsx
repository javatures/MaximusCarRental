import { FC, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

interface Car {
    id: number;
    make: string;
    model: string;
    type: string;
    year: string;
    renterId: number;
}

const AdminCarTable: FC<{}> = (): JSX.Element => {
    const [cars, setCars] = useState(Array<Car>());

    useEffect(() => {
        fetch('http://localhost:8080/car')
        .then(response => response.json())
        .then(json => {
            setCars(json);
        })
    }, [])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Car Id</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Type</th>
                    <th>Year</th>
                    <th>Rented By</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car, index) => (
                    <tr key={index}>
                        <td>{car.id}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.type}</td>
                        <td>{car.year}</td>
                        <td>{car.renterId}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default AdminCarTable;