import React from 'react';
import { styled } from '@mui/material/styles';
import {Colors} from "../../styles/theme";
import { Button,Box } from '@mui/material'

const StyledButton= styled(Button)(()=>({
    background:Colors.primary,
    minWidth:"150px",
    padding:"10px",
    textTransform:"capitalize",
    '&:hover':{
        background:Colors.maroon
    }

}))
const ButtonBox= styled(Box)(()=>({
 display:"flex",
 justifyContent:"center",
 alignItems:'center',
minHeight:"150px",


}))


const index = (props) => {
  return (
    <ButtonBox>
      <StyledButton variant='contained'>{props.name}</StyledButton>
    </ButtonBox>
  )
}

export default index
