import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Addmovies = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }} 
      noValidate
      autoComplete="off"
    >
        <h1>Add Movies</h1> 
      <div>
        <TextField
          required
          id="outlined-required"
          label="Movie Name"
        />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="Movie Image"
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Movie Description"
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Movie Director"
        />
      </div>
      <div>
        <Button variant='contained' >ADD</Button> 
        <br></br>
      </div>
    </Box>
  )
}

export default Addmovies