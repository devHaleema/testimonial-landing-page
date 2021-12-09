import React from "react";
import "./footer.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import subscribe from "C:/Users/HALIMA/projects/testimonial/src/assests/subscribe.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footter() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="box-div">
        <Grid container spacing={1} className="div-row3">
          <Grid item xs={12} md={6}>
            <div className="img3">
              <img
                src={subscribe}
                alt="Subscription"
                className="subscribe"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="subscribe-input">
            <h2 className="head">Be a member <br />of our community</h2>
            <p className="sub-text">We’d make sure you’re always first to know what’s<br /> happening on Vasiti—thus, the world.</p>
            <div className="wrap">
             <input type="email" placeholder="Enter email" name="email"/>
             <input type="button" value="Subscribe" />
             </div>
          </Grid>
        </Grid>
        <Grid container spacing={1} className="list">           
          <Grid item xs={12} md={2}>
            <ul><h5 className="list-head">company</h5>
              <li className="last">About Us</li>
              <li className="last">Terms of Use</li>
              <li className="last">Privacy Policy</li>
              <li className="last">Press & Media</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={2}>
          <ul><h5 className="list-head">product</h5>
              <li className="last">MarketPlace</li>
              <li className="last">Magazine</li>
              <li className="last">Seller</li>
              <li className="last">Wholesale</li>
              <li className="last">Services</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={2}>
          <ul><h5 className="list-head">Careers</h5>
              <li className="last">Become a Campus Rep</li>
              <li className="last">Become a Vasiti Influencer</li>
              <li className="last">Become a Campus writer</li>
              <li className="last">Become an Affiliate</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={2}>
          <ul><h5 className="list-head">Get in touch</h5>
              <li className="last">Contact Us</li>
              <li className="last">Partner with us</li>
              <li className="last">Advertise with Us</li>
              <li className="last">Help/FAQ</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={2}>
          <ul><h5 className="list-head">Join our community</h5>
              <li className="last">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />  
              </li>
              <li className="last"></li>
              <li className="last">Email Newsletter</li>
              <li className="last"></li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Footter;
