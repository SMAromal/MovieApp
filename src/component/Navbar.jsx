import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div"   align="left" sx={{ flexGrow: 1 }}>
            MovieApp
          </Typography>
          <Link to={'/view'}><Button style={{color: 'white'}}>View movies</Button></Link>
          <Link to={'/add'}><Button style={{color: 'white'}}>Add movies</Button></Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar