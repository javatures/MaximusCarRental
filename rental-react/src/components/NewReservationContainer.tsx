import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import ReservationForm from './ReservationForm';


const NewReservationContainer: FC<{}> = (): JSX.Element =>
{
    return(
        <Container data-testid="newreservationcontainer">
            <h1>Make a Reservation</h1>
            <ReservationForm />
        </Container>
    )
}
export default NewReservationContainer;
