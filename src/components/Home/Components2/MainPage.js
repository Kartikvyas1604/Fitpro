import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import eroBannerImage from "../../../assets/images/banner1.png";

const MainPage = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#7247CE" fontWeight="700" fontSize="32px">
      FIT-PRO
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Typography
      fontWeight={600}
      color="#7247CE"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img
      src={
        eroBannerImage
      }
      alt="hero-banner"
      className="hero-banner-img"
      style={{ width: "600px", height: "700px" ,paddingTop:'50px'}}
    />
    <Typography 
    fontWeight={"300px"}
    
    fontSize="100px"
    align="center"
    style={{background : "#7247CE", color:"#000"}}
    >
      Feature
    </Typography>

  </Box>
);

export default MainPage;
