import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthentication } from '../hooks/auth';
import { Header } from '../components/header'

export const ProtectedLayout = ({ children }) => {
  const { checkIsUserLoggedIn } = useAuthentication()

  if (!checkIsUserLoggedIn()) return <Navigate to="/login"/>

  return (
    <>
      <Header />
      {children}
    </>
  )
}

ProtectedLayout.propTypes = {
  children: PropTypes.element.isRequired
}
