import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"
import { ArrowBack } from "@mui/icons-material"
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material"
import { styledListItemText, styledDrawerPaperProps } from "./sidebarMenu.style"
import { styledArrowBackIcon } from "./sidebarMenu.style"

export const SidebarMenu = ({ isDrawerOpen, onClick }) => {
  const navigate = useNavigate()

  const drawerPaperProps = {
    sx: styledDrawerPaperProps
  }

  const listItemTextTypographyProps = {
    sx: styledListItemText
  }

  const menuListItems = [
    {
      label: 'Início',
      path: '/'
    },
    {
      label: 'Criar metas',
      path: '/create'
    },
    {
      label: 'Histórico',
      path: '/history'
    }
  ]

  function goToMenuItemPath (path) {
    onClick(false)
    navigate(path)
  }

  return (
    <Drawer anchor='left' open={isDrawerOpen} onClose={() => onClick(false)} PaperProps={drawerPaperProps}>
      <Box padding="20px 0px" width="300px">
        <Stack>
          <ArrowBack color="white" sx={styledArrowBackIcon} onClick={() => onClick(false)}/>
        </Stack>
        <List>
          {
            menuListItems.map(({label, path}) => (
              <ListItem key={label} disablePadding onClick={() => goToMenuItemPath(path)}>
                <ListItemButton>
                  <ListItemText primary={label} primaryTypographyProps={listItemTextTypographyProps}/>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  )
}

SidebarMenu.propTypes = {
  isDrawerOpen: PropTypes.bool, 
  onClick: PropTypes.func
}