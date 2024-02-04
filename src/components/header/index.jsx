import { Menu } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar } from "@mui/material"
import { styledMenuIcon, styledToolbar } from "./header.style"
import { ProfileAvatar } from "../profileAvatar"
import { SidebarMenu } from "../sidebarMenu"
import { useState } from "react"

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <AppBar color="gray" position="static">
      <Toolbar sx={styledToolbar}>
        <IconButton size="medium" edge="start" onClick={() => setIsDrawerOpen(true)}>
          <Menu color="white" sx={styledMenuIcon}/>
        </IconButton>
        <ProfileAvatar />
      </Toolbar>
      <SidebarMenu isDrawerOpen={isDrawerOpen} onClick={setIsDrawerOpen}/>
    </AppBar>
  )
}