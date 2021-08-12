import React from 'react'
import GlobalStyles from './GlobalStyles/GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Characters from './pages/Characters'
import Detail from './pages/Detail'

const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Characters /> 
                    </Route>
                    <Route exact path="/character/:id">
                        <Detail /> 
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
