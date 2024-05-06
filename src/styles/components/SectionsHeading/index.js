import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import {Colors} from "../../theme";

export const HeadingBox = styled(Box)(()=>({
    // border:'1px solid red',
    textAlign:"center",
    width:"50%",
    margin:"auto",

    '& h1':{
        color:Colors.fontColor

    },
    '& p':{
        color:Colors.fontColor,

        lineHeight:"22px",
        marginBottom:"30px",

    }
}))