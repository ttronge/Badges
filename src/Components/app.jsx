import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BadgesNew from '../Pages/BadgesNews'
import BadgesEdit from '../Pages/BadgeEdit'
import Badges from '../Pages/Badges'
import Layaout from './Layout/Layout'
import NotFound from '../Pages/NotFound'
import BadgesDetailsContainer from '../Pages/BadgesDetailsContainer'

const App = () => {
    return (
        <BrowserRouter>
            <Layaout>
                <Switch>
                    <Route exact path='/' component={Badges} />
                    <Route exact path='/badges/new' component={BadgesNew} />
                    <Route exact path='/badges/:badgeId/edit' component={BadgesEdit} />
                    <Route exact path='/badges/:badgeId/' component={BadgesDetailsContainer} />
                    <Route component={NotFound} />
                </Switch>
            </Layaout>
        </BrowserRouter>
    )
}
export default App