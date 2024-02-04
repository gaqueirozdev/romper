import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../hooks/auth";
import { Avatar, MenuItem, Menu as AvatarMenu } from "@mui/material"
import { styledAvatar } from "./profileAvatar.style";

export const ProfileAvatar = () => {
  const navigate = useNavigate()
  const { logout } = useAuthentication()
  const [avatarMenuAnchorEl, setAvatarMenuAnchorEl] = useState(null);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false)

  function handleAvatarClick (event) {
    setAvatarMenuAnchorEl(event.currentTarget)
    setIsAvatarMenuOpen(true)
  }

  function handleAvatarMenuClose () {
    setAvatarMenuAnchorEl(null);
    setIsAvatarMenuOpen(false)
  }

  function goToProfile () {
    handleAvatarMenuClose()
    navigate('/profile')
  }

  function handleLogout () {
    handleAvatarMenuClose()
    logout()
    navigate('/login')
  }

  return (
    <>
      <Avatar sx={styledAvatar} onClick={handleAvatarClick} />
      <AvatarMenu sx={{ marginTop: '.4rem' }} anchorEl={avatarMenuAnchorEl} open={isAvatarMenuOpen} onClose={handleAvatarMenuClose}>
        <MenuItem onClick={goToProfile} sx={{ fontSize: '14px' }}>Editar perfil</MenuItem>
        <MenuItem onClick={handleLogout} sx={{ fontSize: '14px' }}>Sair</MenuItem>
      </AvatarMenu>
    </>
  )
}