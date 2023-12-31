import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Spinner />
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};


PrivateRoute.propTypes = {
    children: PropTypes.node
};
export default PrivateRoute;