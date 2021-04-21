import React, { Fragment, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from 'react-router-dom'
import { Menu } from "../componentes/Menu";
import { CreateTask } from './CreateTask'
import { Home } from './Home'
import { NotFound } from './NotFound'
import { Schedule } from './Schedule'
import { Signin } from './Signin'
import { Signup } from './Signup'
import { Splash } from './Splash'
import { TaskDetail } from './TaskDetail'


const AuthenticatedUser = ({children}) => {

    const {pathname} = useLocation(); //obtenemos la URL

    useEffect(() => {
        console.log('pathname',pathname)
    }, [pathname])

    return (
    <Fragment>
        {children}
        <Menu pathname={pathname}/>
    </Fragment>
    )
}

const NotAuthenticatedUser = ({children}) => {
    return children;
}

export const NavigationApp = () => {

    const [auth, setauth] = useState(false);
    const [isLoading, setisLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setauth(true);
            setisLoading(false);
        },1000);
    },[])

    if (isLoading){
        return <Splash/>
    }

    return (
        <Router>
            {
                !auth && (
                    <NotAuthenticatedUser>
                        <Switch>
                            <Route exact path="/" component={Signin} />
                            <Route path="/signup" component={Signup} />
                            <Route path="*" component={NotFound} />                                                    
                        </Switch>
                    </NotAuthenticatedUser>                    
                )
            }
            {
                auth && (
                    <AuthenticatedUser>
                        <Switch>
                            <Route exact path="/" component={Home} /> 
                            <Route path="/schedule" component={Schedule} /> 
                            <Route path="/create" component={CreateTask} /> 
                            <Route path="/detail" component={TaskDetail} /> 
                            <Route path="*" component={NotFound} /> 
                        </Switch>        
                    </AuthenticatedUser>
                    
                )
            }
            
        </Router>
    );
}
