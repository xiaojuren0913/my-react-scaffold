import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { FC } from 'react';
import Home from './pages/Home/index';

interface routeItemType {
    router: string,
    title: string,
    component: FC,
}

const routeConfig = [
    {
        router: 'home',
        title: '首页',
        component: Home
    }
]
const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Redirect exact={true} from="/" to="/home" />
            {routeConfig.map((routeItem: routeItemType, index: number) => {
                return <Route exact={true} path={`/${routeItem.router}`} component={routeItem.component} key={index} />
            })}
        </Switch>
    </BrowserRouter>
)

export default AppRouter;