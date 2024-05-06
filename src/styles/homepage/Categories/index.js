import { styled } from '@mui/material/styles';
import {Box, Container} from "@mui/material";
import { Colors } from '@/styles/theme';

export const CategoryContainer = styled(Box)(()=>({
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    gap:"20px",
    margin:"auto",
    // border:"1px solid red",
    width:"90%",
    gap:"20px",
    
}))

export const StyledBox = styled(Box)(()=>({
   gap:"20px",
   display:"grid",
    
}))


export const EachItemBox = styled(Box)(({image,minHeight})=>(
    {
        minWidth:"362px",
       
        minHeight: minHeight ? minHeight : "200px",
       
        background:`rgba(0,0,0,0.5) url(${image.src})`,
      
        backgroundSize:"375px 100%",
       
        // border:"1px solid red",
        borderRadius:"10px",
        backgroundRepeat:"no-repeat",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:Colors.white,
        overflow:"hidden",
        backgroundBlendMode: "darken",
       
        
      
          
    }
))