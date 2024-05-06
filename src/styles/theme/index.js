import { createTheme } from "@mui/material/styles";


// colors that are used throughout the code
export const Colors={
    primary:" #BE0006",// red color  
    white: "#FFFFFF",
    fontColor:"#3C4852",
    litegray:"#F1F1F1",
    maroon:"#7D0A0A",
    snowWhite: "#F1F1F1",
    black:"#171717",
    newsletter:"#495057"

    



    
}
// change the default font family with Literata
const theme = createTheme({
    typography:{
        fontFamily:"Literata",
        h1:{
            fontSize:"30px",
            fontWeight:700,
            lineHeight:"80px",
           
        },
        h4:{
            fontSize:"14px",
            fontWeight:700,
            lineHeight:"24px",
           
        },
        h4:{
            fontSize:"24px",
            fontWeight:700,
            lineHeight:"24px",
           
        },
        h5:{
            fontSize:"20px",
            fontWeight:700,
            lineHeight:"24px",
           
        },
        h6:{
            fontSize:"16px",
            fontWeight:500,
            lineHeight:"18.23px",
           
        },
        subtitle1:{
            fontSize:"16px",
            fontWeight:400,
            lineHeight:"30px",
           
        },
        body1:{
            fontSize:"14px",
            fontWeight:400,
            lineHeight:"29.7px",
           
        },
        body2:{
            fontSize:"12.15px",
            fontWeight:300,
            lineHeight:"18.23px",
           
        },
    }
})
export default theme