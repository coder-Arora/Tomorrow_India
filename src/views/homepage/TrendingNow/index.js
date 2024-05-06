import React , {useState} from 'react'
import Trending from "../../../images/Trending.svg"
import TrendingGrey from "../../../images/TrendingGrey.svg";
import Release from "../../../images/Realeases.svg";
import ReleaseRed from "../../../images/ReleaseRed.svg";
import Popular from "../../../images/Popular.svg";
import PopularRed from "../../../images/PopularRed.svg";

import TrendingCards from "../../../components/TrendingCards";

import { Container } from '@mui/material';
import { TrendingBox,TrendingContainer } from "../../../styles/homepage/TrendingNow";


const index = () => {
    const arr=[{img1:Trending, img2:TrendingGrey, name:"TRENDING NOW", subheading:"Find interesting blogs that are trending now" },
    {img1:ReleaseRed, img2:Release, name:"NEW RELEASES", subheading:"Catch up on all the latest blogs" },
    {img1:PopularRed, img2:Popular, name:"POPULAR PICKS", subheading:"Find the blogs popular among the readers" }]

   

    const [hoveredCards, setHoveredCards] = useState({});

    const handleMouseEnter = (id) => {
      setHoveredCards(prevState => ({
       ...prevState,
        [id]: true
      }));
    };
  
    const handleMouseLeave = (id) => {
      setHoveredCards(prevState => ({
       ...prevState,
        [id]: false
      }));
    };
    
  return (
    <TrendingBox>
        <TrendingContainer >
            {arr.map((i,index)=>(
                <TrendingCards img1={i.img1} img2={i.img2} name={i.name} subheading={i.subheading} key={index} handleMouseEnter={()=>handleMouseEnter(index)}  handleMouseLeave={()=>handleMouseLeave(index)} show={hoveredCards[index]} />
            ))}

            
          
        </TrendingContainer>
      
    </TrendingBox>
  )
}

export default index
