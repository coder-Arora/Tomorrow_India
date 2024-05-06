import React from 'react';
// import New Lauch Images to put in the image Array
import LaunchImg1 from "../../../images/LaunchImg1.png"
import LaunchImg2 from "../../../images/LaunchImg2.png"
import LaunchImg3 from "../../../images/LaunchImg3.png"
import LaunchImg4 from "../../../images/LaunchImg4.png"

import SectionsHeading from "../../../components/SectionsHeading";
import NewLaunchCard from "../../../components/NewLaunchCard";
import Button from "../../../components/Button";
import { Container } from '@mui/material'
import {LaunchContainer} from "../../../styles/homepage/NewLaunches"


const index = () => {

  const imageArray = [LaunchImg1, LaunchImg2, LaunchImg3, LaunchImg4]
  return (
    <div>
      <SectionsHeading heading="New Launches" subheading="Find topics based on your interest, find curated content to increase your day to day knowledge and stay update with latest news and industry trends" />
      <LaunchContainer>
        {imageArray.map((i, index) => (
          <NewLaunchCard key={index} image={i} />
        ))}

      </LaunchContainer>
      <Button name="More"></Button>


    </div>
  )
}

export default index
