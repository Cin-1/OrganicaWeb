import React from 'react';

import theme from "../components/ui/theme";
import { makeStyles } from '@material-ui/core/styles';
import {
  Box
} from '@material-ui/core';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Header = () => {

  const classes = useStyles();

    return ( 
      <Box pt={15} mb={8}>
        <Swiper
          slidesPerView={1}
          autoplay
          navigation
          pagination
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className={classes.swiperBox}
        >
          <SwiperSlide>
            <img
              src="images/portada2.jpg"
              alt=" kitchen counter"
              className={classes.swiperBox}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="images/portada.jpg" 
              alt=" kitchen counter"
              className={classes.swiperBox}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="images/portada3.jpg" 
              alt=" kitchen counter"
              className={classes.swiperBox}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="images/portada1.jpg" 
              alt=" kitchen counter"
              className={classes.swiperBox}
            ></img>
          </SwiperSlide>
        </Swiper>
      </Box>
     );
}
 
export default Header;

const useStyles = makeStyles({
  swiperBox: {
    width: "1095px",
    height: "300px",

    [theme.breakpoints.down("md")]: {
      width: "800px",
      height: "250px",
    },

    [theme.breakpoints.down("sm")]: {
      width: "380px",
      height: "180px",
    },
  },
});