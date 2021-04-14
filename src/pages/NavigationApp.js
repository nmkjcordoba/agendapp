import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { CreateTask } from './CreateTask'
import { Home } from './Home'
import { NotFound } from './NotFound'
import { Schedule } from './Schedule'
import { Signin } from './Signin'
import { Signup } from './Signup'
import { Splash } from './Splash'
import { TaskDetail } from './TaskDetail'

export const NavigationApp = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/home" component={Home} /> 
            <Route path="/shedule" component={Schedule} /> 
            <Route path="/create" component={CreateTask} /> 
            <Route path="/detail" component={TaskDetail} /> 
            <Route path="*" component={NotFound} /> 
        </Switch>
    </Router>
)