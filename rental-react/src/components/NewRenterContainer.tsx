import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import RenterForm from './RenterForm';

const NewRenterContainer: FC<{}> = (): JSX.Element => {
    
    return(
        <Container>
            <h1>Create a new Account</h1>
            <RenterForm />
        </Container>
    )
}

export default NewRenterContainer;