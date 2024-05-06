import React, { useState } from 'react'
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import {Colors} from "../../styles/theme";
import Trending from "../../images/Trending.svg";
import TrendingGrey from "../../images/TrendingGrey.svg";

import { Box, Typography, Avatar } from '@mui/material'
const CardBox= styled(Box)(({show})=>({
    minWidth:"370px",
    minHeight:"200px",
    padding:"30px",
    background:Colors.white,
    borderRadius:"20px",
    display:"flex",
    // justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    '& img':{
        width:"60px",
        height:"60px",
        
        marginBottom:"20px",
    },
    '& h5 ':{
        // color:changeColor===true ? Colors.primary:Colors.fontColor,
        marginBottom:"20px",

    },

    '& p ':{
      fontSize:"15px"
    }

}))


const index = (props) => {
   
  return (
    <CardBox  onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave}>
        {/* <Avatar alt="Trending" src={Trending.src}/> */}
        <Image src={props.show? props.img1 : props.img2}  alt="trending" width={100} height={100}/>
        <Typography  style={{color:props.show?Colors.primary:Colors.fontColor}}variant="h5" changeColor={props.show}>{props.name}</Typography>
        <Typography variant="body1" >{props.subheading}</Typography>
      
    </CardBox>
  )
}

export default index
