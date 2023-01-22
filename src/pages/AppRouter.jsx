import { Route, Switch } from "react-router-dom";
import { CountryPage } from "pages/CountryPage";
import { HomePage } from "pages/HomePage";
import { NotFoundPage } from "pages/NotFoundPage";
import { getRouteCountry, getRouteHome, getRouteNotFound } from "consts/routes";

export const AppRouter = () => {
    return (
        <Switch>
            <Route path={getRouteHome()} exact={true}>
                <HomePage />
            </Route>
            <Route path={getRouteCountry()} exact={true}>
                <CountryPage />
            </Route>
            <Route path={getRouteNotFound()} exact={true}>
                <NotFoundPage />
            </Route>
        </Switch>
    );
};
