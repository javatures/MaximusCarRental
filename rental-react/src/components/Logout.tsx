import { FC } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './gStyle.css';

const Logout: FC<{ adminStatusChanged: Function, userLoggedIn: Function}> = (props): JSX.Element => {
    let history = useHistory();
    props.adminStatusChanged(false);
    props.userLoggedIn(false);

    return (
        <Container data-testid="logout" className="logout">
            <h1>Logged Out</h1>
            <Button onClick={(e) => history.push("/login")} variant="danger">Go Log Back In</Button>
        </Container>
    )
}

export default Logout;