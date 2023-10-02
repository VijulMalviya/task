import { Grid, Typography } from '@mui/material'
import React from 'react'

const NoData = ({title}) => {
  return (
    <>
    <Grid container>
      <Grid item xs={12}>
        <Typography className='center no-data mt-30'>{title}</Typography>
      </Grid>
    </Grid>
    </>
  )
}

export default NoData