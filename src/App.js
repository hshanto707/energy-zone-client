import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Router>
          {/* <Header></Header> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/programs">
              {/* <Programs></Programs> */}
            </Route>
            <Route exact path="/services">
              {/* <Services></Services> */}
            </Route>
            {/* <Route path="/trainers">
              <Trainers></Trainers>
            </Route>
            <PrivateRoute path="/supplements">
              <Supplements></Supplements>
            </PrivateRoute>
            <PrivateRoute path="/my-plans">
              <MyPlans></MyPlans>
            </PrivateRoute>
            <PrivateRoute path="/services/:name/:description" render={(props) => <ServicePage {...props} />}>
              <ServicePage></ServicePage>
            </PrivateRoute>
            <PrivateRoute path="/programs/:name/:description" render={(props) => <ServicePage {...props} />}>
              <ProgramPage></ProgramPage>
            </PrivateRoute>
            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route> */}
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
