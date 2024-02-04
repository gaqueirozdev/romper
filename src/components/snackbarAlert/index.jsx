import PropTypes from 'prop-types';
import { Snackbar, SnackbarContent } from "@mui/material"
import { theme } from '../../../theme';

const colors = {
  success: theme.palette.green.main,
  error: theme.palette['red-light'].main,
  info: theme.palette['gray-light'].main,
}

export const SnackbarAlert = ({ openSnackbar, snackbarMessage, onClose, duration = 3500, type = 'success'}) => {
  return (
    <Snackbar 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={openSnackbar}
      onClose={() => onClose(false)}
      autoHideDuration={duration}
      key={snackbarMessage} 
    >
      <SnackbarContent message={snackbarMessage} sx={{ 
        fontSize: '12px', 
        backgroundColor: colors[type]
      }}/>
    </Snackbar>
  )
}

SnackbarAlert.propTypes = {
  openSnackbar: PropTypes.bool.isRequired,
  snackbarMessage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  type: PropTypes.string
}
