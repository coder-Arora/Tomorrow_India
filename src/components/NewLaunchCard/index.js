import React from 'react';
import Image from 'next/image';
import {Colors} from "../../styles/theme";
// import all images from image folder 
import LaunchImg1 from '../../images/LaunchImg1.png';
import HandsImg from '../../images/HandsImg.svg';
import Avatar1 from "../../images/Avatar1.svg"
import Avatar2 from "../../images/Avatar2.svg"
import Avatar3 from "../../images/Avatar3.svg"
import Avatar4 from "../../images/Avatar4.svg"
import Eye from "../../images/Eye.svg"
import Comment from "../../images/Comment.svg";
import Share from "../../images/Share.svg";
import Like from "../../images/Like.svg";
import ShareIcon from "../../images/ShareIcon.svg";

// import bookmark icon
import {Bookmark,BookmarkBorder} from '@mui/icons-material';


// import mui prebuilt components
import {CardMedia, Avatar, Box, Typography, AvatarGroup, IconButton, Checkbox } from '@mui/material';

// import, styled pre built components according to the need
import { StyledCard, StyledCardContent, HandBox, StyledAvatar, ContentBox, IconBox, HeadingBox, ParaBox, FooterBox, DiscoverButton,IconsStyle,IconAvatar } from "../../styles/components/NewLaunchCard";


const index = (props) => {
    // array for showing no. of views, like, share, and comment on new launch
    const actionArr = [{ id: 1, img: Eye, number: "200" }, { id: 2, img: Comment, number: "200" }, { id: 3, img: Share, number: "200" }, { id: 4, img: Like, number: "200" },];
    // for save new launch post aria-label
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <StyledCard>
            <CardMedia
                component="img"
                image={props.image.src}
                alt="img"
            />
            <StyledCardContent>

                <StyledAvatar alt="img" src={HandsImg.src} />
                <ContentBox>
                    <IconBox>
                        <Box>
                            {/* map function used on actionData array */}
                            {actionArr.map((i) => (
                                <IconsStyle><Image src={i.img} alt={i.img} /> &nbsp;{i.number}</IconsStyle>

                            ))}
                        </Box>
                        <Box>
                            <IconAvatar>

                           
                        <Checkbox
                                {...label}
                                icon={<BookmarkBorder className='borderBookmark' />}
                                checkedIcon={<Bookmark className='filledBookMark'/>}
                            />
                             </IconAvatar>
                            <IconButton aria-label="Share" disableRipple >
                                <IconAvatar alt="Share" src={ShareIcon.src} />
                              
                              
                              
                            </IconButton>
                            
                        </Box>
                    </IconBox>
                    <HeadingBox>
                        <Typography variant="h6" >
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
                        </Typography>
                    </HeadingBox>

                    <ParaBox>
                        <Typography variant="body2" >
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not
                        </Typography>
                    </ParaBox>
                    <FooterBox>
                        <AvatarGroup max={4}>
                            <Avatar alt="Remy Sharp" src={Avatar1.src} width="30px" height="30px" />
                            <Avatar alt="Travis Howard" src={Avatar2.src} />
                            <Avatar alt="Cindy Baker" src={Avatar3.src} />
                            <Avatar alt="Agnes Walker" src={Avatar4.src} />

                        </AvatarGroup>
                        <DiscoverButton variant="outlined"> Discover Now</DiscoverButton>
                    </FooterBox>
                </ContentBox>






            </StyledCardContent>
        </StyledCard>
    )
}

export default index
