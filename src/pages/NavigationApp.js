import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { NotFound } from './NotFound'
import { Signin } from './Signin'
import { Signup } from './Signup'
import { Splash } from './Splash'

export const NavigationApp = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="*" component={NotFound} /> 
        </Switch>
    </Router>
)