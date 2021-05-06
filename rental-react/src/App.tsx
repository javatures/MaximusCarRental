import React, { useState } from 'react';
import { Switch, Route} from "react-router-dom";
import NewUserForm from './components/NewUserForm';
import CarHomepage from './components/CarHomepage';
import SigninForm from './components/SigninForm';
import ReservationForm from './components/ReservationForm'
import AdminDashboard from './components/AdminDashboard';
import NewCarForm from './components/NewCarForm';
import CurrentUser from './components/CurrentUser';
import NavbarComp from './components/NavbarComp';
import LandingPage from './components/LandingPage';
import Logout from './components/Logout';
import RenterDashboard from './components/RenterDashboard';

function App() {
  const [isCurrentUserAdmin, setIsCurrentUserAdmin] = useState(CurrentUser.isAdmin());
  const [loggedIn, setLoggedIn] = useState(false);

  const adminStatusChanged = (val: boolean) => {
    setIsCurrentUserAdmin(val);
  }

  const userLoggedIn = (val: boolean) => {
    setLoggedIn(val);
  }

  return (
    <div>
      <div>
        <NavbarComp isAdmin={isCurrentUserAdmin} isLoggedIn={loggedIn}/>
      </div>

      <div>
        <Switch>
          <Route path="/login">
            <SigninForm adminStatusChanged={adminStatusChanged} userLoggedIn={userLoggedIn} />
          </Route>
          <Route path="/newAccount">
            <NewUserForm adminStatusChanged={adminStatusChanged} userLoggedIn={userLoggedIn}/>
          </Route>
          {/* <Route path="/cars">
            <CarHomepage />
          </Route> */}
          <Route path="/makeReservation">
            <ReservationForm />
          </Route>
          <Route path="/adminDashboard">
            <AdminDashboard />
          </Route>
          <Route path="/newCar">
            <NewCarForm />
          </Route>
          <Route path="/renterDashboard">
            <RenterDashboard />
          </Route>
          <Route path="/logout">
            <Logout adminStatusChanged={adminStatusChanged} userLoggedIn={userLoggedIn} />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
