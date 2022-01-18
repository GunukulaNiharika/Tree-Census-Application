import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './HomeComponent';


function Main(){
    return(
        <>
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        </>
    );
}

export default Main;