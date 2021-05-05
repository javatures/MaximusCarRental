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

function App() {
  const [isCurrentUserAdmin, setIsCurrentUserAdmin] = useState(CurrentUser.isAdmin());

  const adminStatusChanged = (val: boolean) => {
    setIsCurrentUserAdmin(val);
  }
  console.log(isCurrentUserAdmin);

  return (
    <div>
      <div>
        <NavbarComp isAdmin={isCurrentUserAdmin}/>
      </div>

      <div>
        <Switch>
          <Route path="/login">
            <SigninForm isAdmin={isCurrentUserAdmin} adminStatusChanged={adminStatusChanged}/>
          </Route>
          <Route path="/newAccount">
            <NewUserForm isAdmin={isCurrentUserAdmin} adminStatusChanged={adminStatusChanged}/>
          </Route>
          <Route path="/cars">
            <CarHomepage />
          </Route>
          <Route path="/makeReservation">
            <ReservationForm />
          </Route>
          <Route path="/adminDashboard">
            <AdminDashboard />
          </Route>
          <Route path="/newCar">
            <NewCarForm />
          </Route>
          <Route path="/logout">
            <Logout adminStatusChanged={adminStatusChanged} />
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
