import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import './App.css'
import SignIn from './components/user/SignIn'
import MenuIcon from '@mui/icons-material/Menu'

function App() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      {/* <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-lable='menu'></IconButton>
        </Toolbar>
      </AppBar> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar  position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{mr:2}} >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1}}></Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      
      <SignIn></SignIn>
    </div>
  )
}

export default App
