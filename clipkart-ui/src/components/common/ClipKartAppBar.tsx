import { AppBar, IconButton, Typography, Toolbar, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'


function ClipKartAppBar()
{
    return <AppBar  position='static'>
    <Toolbar>
      <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{mr:2}} >
        <MenuIcon></MenuIcon>
      </IconButton>
      <Typography variant='h6' component='div' sx={{flexGrow:1}}></Typography>
      <Button color='inherit'>Login</Button>
    </Toolbar>
  </AppBar>
}

export default ClipKartAppBar;