import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = lazy(() => import('./pages/Home'))
const History = lazy(() => import('./pages/History'))

const Routes = (p) => {
    return(
        <Router>
            <Switch>
                <Route path="/history">
                    <History />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes