import { FC } from 'react';
import { Container, Button } from 'react-bootstrap';
import AdminUserTable from './AdminUserTable';
import AdminCarTable from './AdminCarTable';
import { useHistory } from 'react-router';
import ReservationTable from './ReservationTable';

const AdminDashboard: FC<{}> = (): JSX.Element => {
    let history = useHistory();

    return (
        <Container data-testid="admindashboard">
            <AdminUserTable />
            <ReservationTable />
            <AdminCarTable />
            <Button onClick={(e) => history.push("/newCar")}>Add New Car</Button>
        </Container>
    )
}

export default AdminDashboard;