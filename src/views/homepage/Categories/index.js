import React from 'react';
import Automobiles from "../../../images/Automobiles.png";
import Entertainment from "../../../images/Entertainment.png";
import HomeAppliances from '../../../images/HomeAppliances.png';
import Electronics from '../../../images/Eletronics.png';
import Education from "../../../images/Education.png";
import PersonalCare from "../../../images/PersonalCare.png";
import Medical from "../../../images/Medical.png";
import Food from "../../../images/Food.png";
import Sports from "../../../images/Sports.png";
import SectionHeading from "../../../components/SectionsHeading";
import { Container, Typography,Box } from '@mui/material';
import {CategoryContainer,StyledBox,EachItemBox} from "../../../styles/homepage/Categories";


const index = () => {
  const categoriesArr = [{img:Automobiles, name:"Automobiles", width:"",minHeight:""},
  {img:Electronics, name:"Electronics", width:"",minHeight:""},
  {img:Medical, name:"Medical", width:"",minHeight:""},
  {img:Entertainment, name:"Art & Entertainment", width:"",minHeight:"250px"},
  {img:Education, name:"Education", width:"",minHeight:"150px"},
  {img:Food, name:"Food & Baverages", width:"",minHeight:""},
  {img:HomeAppliances, name:"Home Appliances", width:"",minHeight:""},
  {img:PersonalCare, name:"Personal Care", width:"",minHeight:""},
  {img:Sports, name:"Sports", width:"",minHeight:""},
]
  return (
    <div>
      <SectionHeading heading="Categories"/>
      <CategoryContainer maxWidth="xl">
        {/* {
          categoriesArr.map((i,index)=>(
            <EachItemBox key={index} image={i.img} minHeight={i.minHeight}>
            <Typography variant="h6" >{i.name}</Typography>
          </EachItemBox>
          ))
        }
        */}
        <StyledBox>
        {
    categoriesArr.slice(0, 3).map((i, index) => (
      <EachItemBox key={index} image={i.img} height={i.minHeight}>
        <Typography variant="h6">{i.name}</Typography>
      </EachItemBox>
    ))
  }
       
        </StyledBox>
        <StyledBox>
        {
    categoriesArr.slice(3, 6).map((i, index) => (
      <EachItemBox key={index} image={i.img} minHeight={i.minHeight}>
        <Typography variant="h6">{i.name}</Typography>
      </EachItemBox>
    ))
  }
        </StyledBox>
        <StyledBox>
        {
    categoriesArr.slice(6, 9).map((i, index) => (
      <EachItemBox key={index} image={i.img} minHeight={i.minHeight}>
        <Typography variant="h6">{i.name}</Typography>
      </EachItemBox>
    ))
  }
        </StyledBox>
        
      </CategoryContainer>

    </div>
  )
}

export default index
