import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart/Cart/Cart";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";
import MyPlans from "./Pages/MyPlans/MyPlans";
import ServicePage from "./Pages/ServicePage/ServicePage";
import ProgramPage from "./Pages/ProgramPage/ProgramPage";
import Registration from "./Pages/Registration/Registration";
import Programs from "./Pages/programs/programs/programs"
import Services from "./Pages/Services/Services/Services"
import Trainers from "./Pages/Trainers/Trainers/Trainers"
import Supplements from "./Pages/Supplements/Supplements/Supplements"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/programs">
              <Programs></Programs>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route path="/trainers">
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
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
