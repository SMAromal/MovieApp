import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'


const Viewmovies = () => {
    const rows=[{mname:'Movie1',mdesc:'Movie1',mdirector:'ManiRatnam'},
        {mname:'Movie2',mdesc:'Movie2',mdirector:'JamesCameroon'},
        {mname:'Movie3',mdesc:'Movie3',mdirector:'Nolan'}]
  return (
    <div>
    {rows.map((item)=>(

    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {item.mname}
      </Typography>
      <Typography variant="h5" component="div">
        {item.mdesc}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {item.mdirector}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  
  ))}
  </div>
  )
}

export default Viewmovies