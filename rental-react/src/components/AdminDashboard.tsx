import { FC } from 'react';
import { Container, Button } from 'react-bootstrap';
import AdminUserTable from './AdminUserTable';
import AdminCarTable from './AdminCarTable';
import { useHistory } from 'react-router';

const AdminDashboard: FC<{}> = (): JSX.Element => {
    let history = useHistory();

    return (
        <Container>
            <AdminUserTable />
            <AdminCarTable />
            <Button onClick={(e) => history.push("/newCar")}>Add New Car</Button>
        </Container>
    )
}

export default AdminDashboard;