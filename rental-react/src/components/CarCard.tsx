import React from 'react';
import { FC } from 'react';

import { Button, Card } from 'react-bootstrap';

interface Car {
    id: number;
    make: string;
    model: string;
    type: string;
    year: string;
    renterId: number;
}

const CarCard: FC<{ car: Car , setCar: Function}> = (props): JSX.Element => {
    
        function clicked(selectedCar: Car) {
        props.setCar(selectedCar);
    }

    return (
        <Card key={props.car.id} data-testid="carcard">
            <Card.Body>
                <Card.Title>Car Number: {props.car.id}</Card.Title>
                <Card.Text>
                    Car Year: {props.car.year} <br />
                    Car Make: {props.car.make} <br />
                    Car Model: {props.car.model} <br />
                    Car Type: {props.car.type} <br />
                    <Button type="submit" onClick={(e) => clicked(props.car)} className="mt-2">Create Reservation</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CarCard;
