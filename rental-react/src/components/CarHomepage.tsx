import { FC, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarCard from './CarCard';

interface Car {
    id: number;
    make: string;
    model: string;
    type: string;
    year: string;
    renterId: number;
}

const CarHomepage: FC<{setCar: Function}> = (props): JSX.Element => {
    const [cars, setCars] = useState(Array<Car>());

    useEffect(() => {
        fetch('http://localhost:8080/car')
        .then(response => response.json())
        .then(json => {
            setCars(json);
        })
    }, [])

    let carCards = [];
    let newCols = [];
    for(let i = 1; i <= cars.length; i++)
    {
        newCols.push(<Col><CarCard setCar={props.setCar} car={cars[i-1]}/></Col>)
        if(i % 3 === 0)
        {
            carCards.push(<Row className="pb-2">{newCols}</Row>)
            newCols = [];
        }
    }

    if(cars.length % 3 !== 0)
    {
        carCards.push(<Row className="pb-2">{newCols}</Row>)
    }

    return (
        <Container data-testid="carhomepage">
            {carCards}
        </Container>
    )
}

export default CarHomepage;