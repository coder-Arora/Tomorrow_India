import { styled } from '@mui/material/styles';
import {InputBase, Box, AppBar,Toolbar,ListItemText, Button,List,ListItem} from '@mui/material';
import {Colors} from "../../theme"

export const StyledAppBar = styled(AppBar)(()=>({
   background:Colors.white,
   height:"70px",
  //  border:"1px solid red",
   display:"flex",
   alignItems:"center",
   boxShadow:"none",
   position:"sticky",
   top:"0",
   left:"0"
 

}))

export const StyledToolbar = styled(Toolbar)(()=>({
   
    // minHeight:"60px",
    // border:"1px solid red",
    width:"90%",
    padding:"0px !important",
    display:"flex",
    justifyContent:"space-between"
 
 }))
export const LogoDiv = styled(Box)(()=>({
    width:"80px",
    height:"70px",
    // border:"1px solid red",
    '& img':{
        width:"80px",
        height:"70px",
        objectFit:"contain",
        imageRendering: "pixelated"
    }

}))
export const MyList = styled(List)(()=>({
 minWidth:"400px",
//  border:"1px solid blue",


}))
export const StyledListItem = styled(ListItem)(()=>({
  textAlign:"center",
  

}))

export const StyledListItemText = styled(ListItemText)(()=>({
   color:Colors.fontColor,
   fontSize:"12px"
   

}))




 export const Search = styled('div')(({ theme }) => ({
    background: Colors.litegray,
    padding: "0 10px",
    borderRadius: "5px",
    minWidth:"100px",
    position:"relative",
    display:"flex",
  //  border:'1px solid yellow',
   minWidth:"300px",
   border: "1.5px solid #848A8F"


    
  }));
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // border:"1px solid red",
  paddingLeft:"10px",


    
  }));
  
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
   
    right:"0",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    '& img':{
        width:"20px",
        height:"20px",
    }
  }));
  export const ButtonBox = styled(Box)(({ theme }) => ({
    // border:"1px solid red",
    gap:"10px",
    display:"flex",
    


    
  }));
  export const StyledButton = styled(Button)(({bgcolor,color})=>({
    minwidth:"50px",
    background: bgcolor ? Colors.primary : Colors.litegray,
    color: color ? Colors.primary : Colors.white,
    fontSize:"14px",
    textTransform:"capitalize",
    borderRadius:"5px",
   
    '&:hover': {
      background: bgcolor ? Colors.maroon : Colors.primary,
      color: color ? Colors.white : Colors.white,
     
    },
    
    
 
 }))
  
 
  