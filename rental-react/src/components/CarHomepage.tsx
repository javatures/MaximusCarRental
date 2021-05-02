import { FC, useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CarCard from './CarCard';

interface Car {
    id: number;
    make: string;
    model: string;
    type: string;
    year: string;
    renterId: number;
}

const CarHomepage: FC<{}> = (): JSX.Element => {
    const [cars, setCars] = useState(Array<Car>());

    useEffect(() => {
        fetch('http://localhost:8080/car')
        .then(response => response.json())
        .then(json => {
            setCars(json);
        })
    }, [])

    console.log(cars[0]);

    let carCards = [];
    for(let i = 0; i < cars.length/3; i++)
    {
        let cols = [];
        for(let j = 0*i; j < 3; j++)
        {
            cols.push(<Col><CarCard car={cars[j]}/></Col>)
        }
        carCards.push(<Row>{cols}</Row>)
    }

    return (
        <Container>
            {carCards}
        </Container>
    )
}

export default CarHomepage;