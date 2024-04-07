import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const authState = useSelector((state) => {
        return state.auth;
    });
      
    if(! authState.auth){
        return <Navigate to="/login"/>
    }
    return children
}

export default PrivateRoute