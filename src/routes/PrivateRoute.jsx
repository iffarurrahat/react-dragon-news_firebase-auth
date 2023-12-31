import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <Spinner />
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};


PrivateRoute.propTypes = {
    children: PropTypes.node
};
export default PrivateRoute;