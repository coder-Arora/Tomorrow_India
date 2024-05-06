import React from 'react';
import Image from 'next/image';
import Logo from "../../images/Logo.png";
import SearchImg from "../../images/Search.png";
import { AppBar, Toolbar, Box, List, ListItem, ListItemText, Button,InputBase} from '@mui/material';
import {LogoDiv,StyledAppBar,StyledToolbar,MyList,StyledListItemText,StyledListItem,StyledButton,Search, 
  StyledInputBase,SearchIconWrapper,ButtonBox } from "../../styles/components/Navbar";

const index = () => {
  const listItemArr = [
    "Business", "knowledge", "Culture", "Start Ups"
  ];
  return (
    <>


      <StyledAppBar>
        <StyledToolbar>

          <LogoDiv>
            <Image src={Logo} alt="logo"></Image>

          </LogoDiv>
          <MyList>
            
              <StyledListItem>
                {listItemArr.map((i, index) => (
                  <StyledListItemText key={index} primary={i}   />
                ))}
              </StyledListItem>

           
          </MyList>
          <Search>

          <StyledInputBase placeholder="Quick Search" />
          <SearchIconWrapper>
            <Image src={SearchImg} alt="Logo"/>
          </SearchIconWrapper>
        </Search>
        <ButtonBox>
          {/* <Button>Hello</Button> */}
          <StyledButton  color="primary">Launch Your Project</StyledButton>
          <StyledButton bgcolor="primary">Login/SignUp</StyledButton>
        </ButtonBox>


        </StyledToolbar>
      </StyledAppBar>
    </>
  )
}

export default index
