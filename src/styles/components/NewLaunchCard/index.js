import { styled } from '@mui/material/styles';
import { Colors } from "../../theme";
import LaunchImgBg from "../../../images/LaunchcardBg.png";
import { Card, CardMedia, CardContent,Box, Avatar,Button } from '@mui/material';

export const StyledCard = styled(Card)(() => ({
    minWidth: "500px",
    minHeight: "623px",
    // border: "1px solid red",
    position: "relative",
    background: Colors.snowWhite,
    boxShadow: "0px 0px 3.04px 0px #E5E5E5",
    " & >img": {
        width: "100%",
        height: "300px",
        objectFit: "cover",
        imageRendering: "pixelated",
    }
}))

export const StyledCardContent = styled(CardContent)(() => ({
    minHeight: "300px",
    background: `url(${LaunchImgBg.src})`,
    backgroundSize: "100% 350px",
    backgroundRepeat: "no-repeat",
    //    border:"1px solid red",
    position: "absolute",
    top: "248px",
    left: "0px",
    right: "0px",
    margin: "0px 20px 20px 20px"




}))

export const StyledAvatar = styled(Avatar)(() => ({
    // border:"1px solid red",
    position:"relative",
    top:"-4px",
    left:"17px",
    width:"40px",
    height:"40px",
    background:Colors.snowWhite,
    '& img':{
        width:"30px",
        height:"30px",
        imageRendering:"pixelated",
    }




}))

export const ContentBox = styled(Box)(() => ({
    display:"flex",
    flexDirection:"column",
    gap:"15px"
   
}))

export const IconBox = styled(Box)(() => ({
   display:"flex",
   justifyContent:"space-between",
//    border:"1px solid red",
   '& > :first-child': {
    minWidth: "250px",
    // border: "1px solid red",
    display: "flex",
     justifyContent:"space-between"
  },
  '& > :last-child': {
   
    display: "flex",
    // border:"1px solid red",
    justifyContent:"center",
    alignItems:"center",
   
  }
}))

export const IconsStyle = styled("span")(() => ({
   fontSize:"10.94px",
   color:Colors.fontColor,
   fontWeight:"400",
   lineHeight:"14.58px",
   display:"flex",
   alignItems:"center",
   justifyContent:"center"
 }))

 export const IconAvatar = styled(Avatar)(() => ({
   width:'40px',
   height:"40px",
   background:Colors.snowWhite,
   '&:hover':{
    width:"40px",
    height:"40px"
   },
   '& img':{
    width:"25px",
    height:"25px",
   }
  }))


export const HeadingBox = styled(Box)(() => ({
   
}))

export const ParaBox = styled(Box)(() => ({
   
}))

export const FooterBox = styled(Box)(() => ({
    display:"flex",
    justifyContent:"space-between"
   
}))

export const DiscoverButton = styled(Button)(() => ({
    border:`0.91px solid ${Colors.fontColor}`,
    color:Colors.fontColor,
    textTransform:"capitalize",
    '&:hover':{
        border:`0.91px solid ${Colors.primary}`,
        color:Colors.primary,
    }
    
   
}))