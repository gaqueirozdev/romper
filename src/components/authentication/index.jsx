import PropTypes from 'prop-types';
import { Box, Button, CircularProgress, Link, TextField, Typography } from "@mui/material"
import { getColor } from "../../assets/helpers/palette"
import { styledAuthenticationBox } from './authenticationBox.style';
import { useSelector } from 'react-redux';

export const AuthenticationBox = ({ type = 'login', onAuthenticate }) => {
  const isLoading = useSelector(({ userSlice }) => userSlice.isLoading)

  return (
    <Box component="form" onSubmit={e => onAuthenticate(e)} width="350px" sx={styledAuthenticationBox}>
      <Typography mb="2.4rem" fontSize="2.4rem" fontWeight="bold" sx={{ color: getColor('white') }}>
        {type === 'login' ? 'Login' : 'Cadastre-se'}
      </Typography>
      <Box width="100%" display="flex" gap="1.6rem" flexDirection="column" mb="2.4rem">
        {type !== 'login' ? <TextField name="name" fullWidth label="Nome"/> : <></>}
        <TextField name="email" fullWidth label="E-mail"/>
        <TextField name="password" type="password" fullWidth label="Senha"/>
      </Box>
      <Button fullWidth size="large" type="submit">
        { isLoading ?
          <CircularProgress color="white" size="28px" /> :
          <>
            {type === 'login' ? 'Entrar' : 'Cadastrar'}
          </>
        }
      </Button>
      <Box mt="1.6rem">
        { type === 'login' ? (
            <Typography fontWeight="bold" fontSize="1.2rem" sx={{ color: getColor('gray-light') }}>
              Não possui cadastro? 
              <Link href='/register' sx={{ cursor: 'pointer', marginLeft: '.4rem' }}>
                Cadastre-se
              </Link>
            </Typography>
            ) : (
            <Link href='/login' sx={{ cursor: 'pointer', fontWeight: 'bold', fontSize: "1.2rem" }}>
              Voltar ao Login
            </Link>
          )
        }
      </Box>
    </Box>
  )
}

AuthenticationBox.propTypes = {
  type: PropTypes.string,
  onAuthenticate: PropTypes.func
}