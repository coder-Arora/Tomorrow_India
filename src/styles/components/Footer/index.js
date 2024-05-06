import { styled } from '@mui/material/styles';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { Colors } from "../../theme";
import {
  Box, Container,
  InputBase,
  Button,
} from '@mui/material';

export const FooterBox = styled(Box)(() => ({
  background: Colors.black,
  minHeight: "300px",
  paddingTop: "30px",



}))

export const TextContainer = styled(Box)(() => ({
  background: Colors.black,
  minHeight: "300px",
  width: "85%",
  border: "1px solid red",
  padding: "0px",
  margin: "auto",
  Color: Colors.white,
display:"flex",




}))

export const SubscribeBox = styled(Box)(() => ({
  width: "60%",
  Color: Colors.white,
  '& h4': {
    marginBottom: "20px",
  }



}))



export const Search = styled('div')(({ theme }) => ({
  background: Colors.newsletter,
  padding: "10px",
  borderRadius: "30px",
  maxWidth: "600px",
  position: "relative",
  display: "flex",

  //  border:'1px solid yellow',
  minWidth: "150px",




}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // border:"1px solid red",

  paddingLeft: "10px",

  color: Colors.white,



}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',

  right: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "0",
  '& img': {
    width: "20px",
    height: "20px",
  }
}));

export const ContactBox = styled(Box)(({ theme }) => ({
  width: '40%',




}));

export const TableBox = styled(Box)(({ theme }) => ({
  marginTop:"20px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr"




}));

export const Circle = styled(FiberManualRecordOutlinedIcon)(({ theme }) => ({
  fontSize:"10px"




}));

export const DiscoverButton = styled(Button)(() => ({
  border:`0.91px solid ${Colors.fontColor}`,
  color:Colors.fontColor,
  textTransform:"capitalize",
  '&:hover':{
      border:`0.91px solid ${Colors.primary}`,
      color:Colors.primary,
  }
  
 
}))