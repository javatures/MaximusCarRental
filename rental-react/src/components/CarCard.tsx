import React from 'react';
import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import CarImages from './CarImages';

interface Car {
    id: number;
    make: string;
    model: string;
    type: string;
    year: string;
    renterId: number;
}

const CarCard: FC<{ car: Car, selectCar: Function}> = (props): JSX.Element => {

    function clicked(selectedCar: Car) {
        props.selectCar(selectedCar);
    }

    return (
        <Card key={props.car.id} data-testid="carcard">
            <CarImages key={'images' + props.car.id} car={props.car}/>
            <Card.Body>
                <Card.Title>Car Number: {props.car.id}</Card.Title>
                <Card.Text>
                    Car Make: {props.car.make} <br />
                    Car Model: {props.car.model} <br />
                    Car Type: {props.car.type} <br />
                    Car Year: {props.car.year} <br />
                    <Button type="submit" onClick={(e) => clicked(props.car)} className="mt-2">Create Reservation</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CarCard;