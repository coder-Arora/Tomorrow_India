import React from 'react';

import {Box,Typography} from '@mui/material'
import {HeadingBox} from '../../styles/components/SectionsHeading'


const index = (props) => {
  return (
    <HeadingBox>
      <Typography variant="h1">{props.heading}</Typography>
      {props.subheading&& <Typography variant="subtitle1" color="initial" component="p">
      {props.subheading}
      </Typography>}
     
    </HeadingBox>
  )
}

export default index
