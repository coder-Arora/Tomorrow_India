import { styled } from '@mui/material/styles';
import {Colors} from "../../../styles/theme";
import { Box,Container } from '@mui/material';

export const TrendingBox = styled(Box)(()=>({
    minHeight:"300px",
    background:Colors.primary
    

}))

export const TrendingContainer = styled(Container)(()=>({
   display:"flex",
   justifyContent:"space-between",
   alignItems:'center',
   minHeight:"300px"

    

}))