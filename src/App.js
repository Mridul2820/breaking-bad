import React from 'react'
import GlobalStyles from './GlobalStyles/GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Characters from './pages/Characters'
import Detail from './pages/Detail'
import Logo from './components/Logo'

const App = () => {
    return (
        <>
            <GlobalStyles />
            
            <Router>
                <Logo />
                <Switch>
                    <Route exact path="/">
                        <Characters /> 
                    </Route>
                    <Route exact path="/character/:id">
                        <Detail /> 
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
