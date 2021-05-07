import React, { FC, useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CarCard from './CarCard';

interface Car {
    id: number;
    make: string;
    model: string;
    type: string;
    year: string;
    renterId: number;
}


const DisplayAvailable: FC<{type: string , selectCar: Function}> = (props): JSX.Element =>{
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
        let car = cars[i-1];
        if(props.type === car.type ){
            newCols.push(<Col key={i-1}><CarCard selectCar={props.selectCar} key={i-1} car={cars[i-1]}/></Col>)
            if(i % 3 === 0)
            {
                carCards.push(<Row className="pb-2">{newCols}</Row>)
                newCols = [];
            }
        }
    }

    if(newCols.length !== 0)
    {
        carCards.push(<Row className="pb-2">{newCols}</Row>)
    }

    return (
        <Container>
            <h3>Available {props.type} Vehicles</h3>
            {carCards}
        </Container>
    )
}


export default DisplayAvailable