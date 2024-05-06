import React from 'react'
import Image from 'next/image';
import {Colors} from "../../styles/theme"
import ForwardArrow from "../../images/ForwardArrow.svg";

import { Box, Typography,Container } from '@mui/material'
import {FooterBox,TextContainer, SubscribeBox,ContactBox, Search,StyledInputBase,SearchIconWrapper,TableBox,Circle,DiscoverButton} from "../../styles/components/Footer";


const index = () => {
  const companyArr=["About Us","Vission","Mission"," Contact Us"]
  const productsArr =["Business","Culture","Knowledge","Start Ups"]
  const resourcesArr=["News","Blogs","FAQ", "Vidoes"]

    
    
   

  
  
 


  return (
    <FooterBox>
      <TextContainer maxWidth="xl">
        <SubscribeBox>
          <Typography variant="h4" color={Colors.white} > Subscribe Our News letter</Typography>
          
          <Search>

          <StyledInputBase placeholder="Enter Your Mailing Address" />
          <SearchIconWrapper>
            <Image src={ForwardArrow} alt="Go Forward"/>
          </SearchIconWrapper>
        </Search>
        <TableBox>
          <Box>
            <Typography variant="body1"color={Colors.white} className='headingCell'>COMPANY</Typography>
          
              {companyArr.map((i,index)=>(
  <Typography variant="body2"  key={index} color={Colors.white}  className='celldetail'><Circle />{i}  </Typography>
              ))}
          
          </Box>

          <Box>
          <Typography variant="body1" color={Colors.white}  className='headingCell'>PRODUCTS
          </Typography>
          {productsArr.map((i,index)=>(
  <Typography variant="body2"  key={index} color={Colors.white}  className='celldetail'><Circle/>{i}  </Typography>
              ))}

          </Box>
          <Box>
          <Typography variant="body1" color={Colors.white}  className='headingCell'>RESOURCES</Typography>
          {resourcesArr.map((i,index)=>(
  <Typography variant="body2" key={index} color={Colors.white}  className='celldetail'><Circle/>{i}  </Typography>
              ))}
          </Box>
        </TableBox>
        </SubscribeBox>
        <ContactBox>
        <Typography variant="h4" color={Colors.white} > Become A Contributor</Typography>
        <DiscoverButton variant="outlined"> Discover Now</DiscoverButton>
        </ContactBox>


      </TextContainer>
      
    </FooterBox>
  )
}

export default index
