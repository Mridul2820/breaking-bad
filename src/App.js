import React from 'react'
import GlobalStyles from './GlobalStyles/GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Haeder from './components/Haeder'

// Pages
import Characters from './pages/Characters'
import Detail from './pages/Detail'
import BetterCallSaul from './pages/BetterCallSaul'

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Haeder />
                <Switch>
                    <Route exact path="/">
                        <Characters /> 
                    </Route>
                    <Route exact path="/character/:id">
                        <Detail /> 
                    </Route>
                    <Route exact path="/better-call-saul">
                        <BetterCallSaul /> 
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
