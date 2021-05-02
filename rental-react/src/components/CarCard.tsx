import { FC } from 'react';
import { Card } from 'react-bootstrap';

interface Car {
    id: number;
    make: string;
    model: string;
    type: string;
    year: string;
    renterId: number;
}

const CarCard: FC<{ car: Car }> = (props): JSX.Element => {

    return (
        <Card>
            <Card.Body>
                <Card.Title>Car Number: {props.car.id}</Card.Title>
                <Card.Text>
                    Car Make: {props.car.make} <br />
                    Car Model: {props.car.model} <br />
                    Car Type: {props.car.type} <br />
                    Car Year: {props.car.year}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CarCard;