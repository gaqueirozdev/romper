import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const RouteGuard = ({ children }) => {
  const { pathname } = useLocation()
  // const { checkIsUserLoggedIn } = useAuthentication()

  if (pathname !== '/login' && pathname !== '/register') {
    return children
  }

  return children
  
  // return checkIsUserLoggedIn() ? <Navigate to="/" /> : children
}

RouteGuard.propTypes = {
  children: PropTypes.element.isRequired
}
