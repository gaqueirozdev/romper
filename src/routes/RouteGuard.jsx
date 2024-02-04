import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthentication } from '../hooks/auth';

export const RouteGuard = ({ children }) => {
  const { pathname } = useLocation()
  const { checkIsUserLoggedIn } = useAuthentication()

  if (pathname !== '/login' && pathname !== '/register') {
    return children
  }
  
  return checkIsUserLoggedIn() ? <Navigate to="/" /> : children
}

RouteGuard.propTypes = {
  children: PropTypes.element.isRequired
}
