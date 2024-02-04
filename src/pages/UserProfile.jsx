import { useRef, useState } from 'react';
import { Avatar, Box, Button, IconButton, Input, TextField } from "@mui/material"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import { useSelector } from 'react-redux';
import { convertBase64 } from '../helpers/convertions';
import { 
  styledAvatarInputBox, 
  styledCameraAltIcon, 
  styledHiddenInput, 
  styledInputIconButton, 
  styledTextFieldsBox, 
  styledUserProfileAvatar, 
  styledUserProfileFormBox, 
  styledUserProfilePageWrapper 
} from './userProfile.style';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const UserProfile = () => {
  const fileInput = useRef(null)
  const [userName, setUserName] = useState('')
  const [userCurrentPassword, setUserCurrentPassword] = useState('')
  const [userNewPassword, setUserNewPassword] = useState('')
  // const [profileImageFile, setProfileImageFile] = useState(null)
  const [profileImageB64, setProfileImageB64] = useState(null)
  // const user = useSelector(({ userSlice }) => userSlice.user)

  const hiddenInputProps = { 
    ref: fileInput 
  }

  function openFileInput () {
    fileInput.current.click()
  }

  async function handleProfileImageInput (e) {
    try {
      const response = await convertBase64(e.target.files[0])
      // setProfileImageFile(e.target.files[0])
      setProfileImageB64(response)
    } catch (error) {
      console.log(error)
    }
  }

  async function saveProfile () {

  }

  return (
    <Box sx={styledUserProfilePageWrapper}>
      <Box sx={styledUserProfileFormBox}>
        <Box sx={styledAvatarInputBox}>
          <Avatar sx={styledUserProfileAvatar} src={profileImageB64} variant="square" />
          <IconButton sx={styledInputIconButton} size="medium" color="primary" onClick={() => openFileInput()}>
            <CameraAltIcon sx={styledCameraAltIcon}/>
          </IconButton>
          <Input onChange={handleProfileImageInput} inputProps={hiddenInputProps} sx={styledHiddenInput} type="file"/>
        </Box>
        <Box sx={styledTextFieldsBox}>
          <TextField value={userName} onChange={(e) => setUserName(e.target.value)} fullWidth type="text" label="Nome" placeholder="Nome" />
          <TextField 
            value={userCurrentPassword} 
            onChange={setUserCurrentPassword} 
            fullWidth 
            type="password" 
            label="Senha atual" 
            placeholder="Digite sua senha atual" 
          />
          <TextField 
            value={userNewPassword} 
            onChange={setUserNewPassword} 
            fullWidth 
            type="password" 
            label="Nova senha" 
            placeholder="Digite uma nova senha" 
          />
          <Button size="small" onClick={saveProfile}>Salvar</Button>
        </Box>
      </Box>
    </Box>
  )
}