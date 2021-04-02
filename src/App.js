import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import CheckOut from "./components/CheckOut/CheckOut";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <div className="App">
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <PrivateRoute path="/checkout/:id">
                            <CheckOut />
                        </PrivateRoute>
                        <PrivateRoute path="/admin">
                            <Admin />
                        </PrivateRoute>
                        <PrivateRoute path="/manageProduct">
                            <ManageProduct />
                        </PrivateRoute>
                        <PrivateRoute path="/orders">
                            <Orders />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
