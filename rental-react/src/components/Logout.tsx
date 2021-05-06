import { FC } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CurrentUser from './CurrentUser';

const Logout: FC<{ adminStatusChanged: Function, userLoggedIn: Function}> = (props): JSX.Element => {
    let history = useHistory();
    props.adminStatusChanged(false);
    props.userLoggedIn(false);
    CurrentUser.logout();

    return (
        <Container data-testid="logout">
            <h1>Logged Out</h1>
            <Button onClick={(e) => history.push("/login")}>Go Log Back In</Button>
        </Container>
    )
}

export default Logout;