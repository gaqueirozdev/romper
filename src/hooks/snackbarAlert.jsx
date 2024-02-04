import { useState } from "react"
import { SnackbarAlert } from "../components/snackbarAlert"

export const useSnackbarAlert = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarType, setSnackbarType] = useState('success')

  const SnackbarAlertRenderer = () => {
    return (
      <SnackbarAlert
        openSnackbar={openSnackbar} 
        snackbarMessage={snackbarMessage}
        onClose={setOpenSnackbar}
        type={snackbarType}
      />
    )
  }

  return { SnackbarAlertRenderer, setOpenSnackbar, setSnackbarMessage, setSnackbarType }
}  