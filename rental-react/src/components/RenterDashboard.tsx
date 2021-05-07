import { FC } from 'react';
import { Container } from 'react-bootstrap';
import ReservationTable from './ReservationTable';


const RenterDashboard: FC<{}> = (): JSX.Element => {

    return (
        <Container data-testid="renterdashboard">
            <ReservationTable />
        </Container>
    )
}

export default RenterDashboard;