import { Route, Switch } from "react-router-dom";
import { getRouteCountry, getRouteHome, getRouteNotFound } from "consts/routes";
import { HomePage } from "./HomePage";
import { CountryPage } from "./CountryPage";
import { NotFoundPage } from "./NotFoundPage";

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
