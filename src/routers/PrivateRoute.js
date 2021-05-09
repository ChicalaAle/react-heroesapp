import { Redirect, Route } from "react-router"
import PropTypes from 'prop-types'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...restParams
}) => {

    console.log(restParams.location)

    const { pathname, search } = restParams.location;

    localStorage.setItem('lastPath', pathname + search);

    return (
        <Route {...restParams} component={ (props) => (
            (isAuthenticated)
                ? (<Component {...props} />)
                : (<Redirect to="/login"/>)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

