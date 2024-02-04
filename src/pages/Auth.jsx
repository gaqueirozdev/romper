import { Box, Typography } from "@mui/material"
import { styledAuthPageTitle } from './auth.style'
import { AuthenticationBox } from "../components/authentication"
import { useLocation } from "react-router-dom"
// import { useAuthentication } from "../hooks/auth"
// import { useSnackbarAlert } from "../hooks/snackbarAlert"

export const Auth = () => {
  const location = useLocation()
  const authType = location.pathname === '/login' ? 'login' : 'register'

  // const { SnackbarAlertRenderer, setSnackbarMessage, setOpenSnackbar, setSnackbarType } = useSnackbarAlert()

  return (
    <>
      <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box>
          <Typography sx={styledAuthPageTitle}>
            Romper 2024
          </Typography>
          <AuthenticationBox type={authType} onAuthenticate={() => {}}/>
        </Box>
      </Box>
      {/* <SnackbarAlertRenderer /> */}
    </>
  )
}