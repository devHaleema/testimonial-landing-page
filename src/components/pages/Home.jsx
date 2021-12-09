import React from "react";
import "./home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import testimonialImage from "./assests/testimonialImage.png";
import blackBeauty from "./assests/blackBeauty.png";
import joseph from "./assests/joseph.png";
import adetola from "./assests/adetola.png";
import emmanuel from "./assests/emmanuel.png";
import chisom from "./assests/chisom.png";
import adunoluwa from "./assests/adunoluwa.png";
import chidi from "./assests/chidi.png";
import womanShopping from "./assests/womanShopping.png";
import temi from "./assests/temi.png";
import promise from "./assests/promise.png";
import feyisola from "./assests/feyisola.png";
import karen from "./assests/karen.png";
import oluchi from "./assests/oluchi.png";
import amos from "./assests/amos.png";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="container">
      <div className="div-link">
        <ul className="links">
          <li className="market">MARKETPLACE</li>
          <li className="center">WHOLESALE CENTER</li>
          <li className="seller">SELLER CENTER</li>
          <li className="service">SERVICES</li>
          <li className="intern">INTERNSHIPS</li>
          <li className="event">EVENTS</li>
        </ul>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} className="div-row">
          <Grid item xs={12} md={6}>
            <h1 className="text">
              Amazing
              <br />
              Experience from Our
              <br /> Wonderful Customers
            </h1>
            <p className="p-text">
              Here is what customers and vendors are saying about <br />
              us, you can share your stories with us too.
            </p>
          </Grid>
          <Grid item xs={12} md={6} className="text-textimonial">
            <div className="img-radius">
              <img
                src={testimonialImage}
                alt="Testimonial"
                className="testimonialImage"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={1} className="div-row1">
          <Grid item xs={12} md={6}>
            <div className="img-radius1">
              <img
                src={blackBeauty}
                alt="Testimonial"
                className="blackBeauty"
              ></img>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="div-row1s">
            <h3 className="experience">Tolu & Joy’s Experience</h3>
            <span className="span1">Customer</span>
            <p className="vasti">
              I had the best experience shopping with vasiti.
              <br />
              Usability of the website was great, very good customer<br /> service,
              an all round great experience. I would definately be coming  back!
              I had the best experience shopping with <br />vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately <br />be coming back!
            </p>
            <Link to="/stories" className="story-link">
              Share your own story!
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={1} className="testimony">
          <Grid item xs={12} md={4} className="joseph-div">
            <img src={joseph} alt="joseph" className="img-joseph" />
            <h3 className="name">Joseph Ike</h3>
            <span className="location">In Ikeja</span>
            <span className="type1">CUSTOMER</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis
              <br />
              ea quis id quis ad et. Sunt qui esse
              <br />
              pariatur duis deserunt mollit dolore <br />
              cillum minim tempor enim. Elit aute
              <br /> irure tempor cupidatat incididunt sint
              <br /> deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit non<br /> deserunt
              
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim
              <br /> velit mollit. Exercitation veniam
              <br /> consequat sunt nostrud amet.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="adetola-div">
            <img src={adetola} alt="adetola" className="img-adetola" />
            <h3 className="name">Adetola Fashina</h3>
            <span className="location">Ibadan</span>
            <span className="type1">CUSTOMER</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis <br />
              ea quis id quis ad et. Sunt qui esse
              <br /> pariatur duis deserunt mollit dolore
              <br /> cillum minim tempor enim. Elit aute <br />
              irure tempor cupidatat incididunt sint <br />
              deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit non<br /> deserunt
              
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim <br />
              velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="emmanuel-div">
            <img src={emmanuel} alt="emmanuel" className="img-emmanuel" />
            <h3 className="name">Emmanuel Fayemi</h3>
            <span className="location">In Akoka</span>
            <span className="type1">CUSTOMER</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis <br />
              ea quis id quis ad et. Sunt qui esse
              <br /> pariatur duis deserunt mollit dolore
              <br /> cillum minim tempor enim. Elit aute <br />
              irure tempor cupidatat incididunt sint <br />
              deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit non <br /> deserunt
             
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim <br />
              velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="chisom-div">
            <img src={chisom} alt="chisom" className="img-chisom" />
            <h3 className="name">Chisom Obilor</h3>
            <span className="location">In Magodo</span>
            <span className="type2">VENDOR</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis <br />
              ea quis id quis ad et. Sunt qui esse
              <br /> pariatur duis deserunt mollit dolore
              <br /> cillum minim tempor enim. Elit aute <br />
              irure tempor cupidatat incididunt sint <br />
              deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit non <br />deserunt
              
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim <br />
              velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="adunoluwa-div">
            <img src={adunoluwa} alt="adunoluwa" className="img-adunoluwa" />
            <h3 className="name">Adunoluwa Adeyemi</h3>
            <span className="location">Iwo Road</span>
            <span className="type2">VENDOR</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis <br />
              ea quis id quis ad et. Sunt qui esse
              <br /> pariatur duis deserunt mollit dolore
              <br /> cillum minim tempor enim. Elit aute <br />
              irure tempor cupidatat incididunt sint <br />
              deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit non <br />deserunt
              
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim <br />
              velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="chidi-div">
            <img src={chidi} alt="chidi" className="img-chidi" />
            <h3 className="name">Chidi Okeke</h3>
            <span className="location">In Somolu</span>
            <span className="type2">VENDOR</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis <br />
              ea quis id quis ad et. Sunt qui esse
              <br /> pariatur duis deserunt mollit dolore
              <br /> cillum minim tempor enim. Elit aute <br />
              irure tempor cupidatat incididunt sint <br />
              deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit
               non <br />deserunt
              
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim <br />
              velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={1} className="div-row2">
          <Grid item xs={12} md={6}>
            <h3 className="josiah">
            Josiah’s Experience
            </h3>
            <span className="vendor">VENDOR</span>
            <p className="p-text1">
            I had the best experience shopping with vasiti.<br />
            Usability of the website was great, very good<br /> 
            customer service, an all round great experience. I<br /> 
            would definately be coming back! I had the best<br /> 
            experience shopping with vasiti. Usability of the<br />
            website was great, very good customer service, an<br /> 
            all round great experience. I would definately be<br /> 
            coming back!
            </p>
            <Link to="/stories" className="story-link1">
              Share your own story!
            </Link>
          </Grid>
          <Grid item xs={12} md={6} className="div-row2s">
            <div className="img-radius2">
              <img
                src={womanShopping}
                alt="Woman Shopping"
                className="womanShopping"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={1} className="testimony">
          <Grid item xs={12} md={4}>
            <img src={temi} alt="Temi" className="img-temi" />
            <h3 className="name">Temi Obadofin</h3>
            <span className="location">In Ikeja</span>
            <span className="type1">CUSTOMER</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis
              <br />
              ea quis id quis ad et. Sunt qui esse
              <br />
              pariatur duis deserunt mollit dolore <br />
              cillum minim tempor enim. Elit aute
              <br /> irure tempor cupidatat incididunt sint
              <br /> deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit non<br /> deserunt
              
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim
              <br /> velit mollit. Exercitation veniam
              <br /> consequat sunt nostrud amet.
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={promise} alt="Promise" className="img-promise" />
            <h3 className="name">Promise Ejiofor</h3>
            <span className="location">Ibadan</span>
            <span className="type1">CUSTOMER</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis <br />
              ea quis id quis ad et. Sunt qui esse
              <br /> pariatur duis deserunt mollit dolore
              <br /> cillum minim tempor enim. Elit aute <br />
              irure tempor cupidatat incididunt sint <br />
              deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit non<br /> deserunt
              
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim <br />
              velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={feyisola} alt="Feyisola" className="img-feyisola" />
            <h3 className="name">Feyisola Arinola</h3>
            <span className="location">In Akoka</span>
            <span className="type1">CUSTOMER</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis <br />
              ea quis id quis ad et. Sunt qui esse
              <br /> pariatur duis deserunt mollit dolore
              <br /> cillum minim tempor enim. Elit aute <br />
              irure tempor cupidatat incididunt sint <br />
              deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit non <br /> deserunt
             
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim <br />
              velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={karen} alt="karen" className="img-karen" />
            <h3 className="name">Karen Ibeh</h3>
            <span className="location">In Magodo</span>
            <span className="type2">VENDOR</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis <br />
              ea quis id quis ad et. Sunt qui esse
              <br /> pariatur duis deserunt mollit dolore
              <br /> cillum minim tempor enim. Elit aute <br />
              irure tempor cupidatat incididunt sint <br />
              deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit non <br />deserunt
              
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim <br />
              velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={oluchi} alt="Oluchi" className="img-oluchi" />
            <h3 className="name">Oluchi Uzo</h3>
            <span className="location">Iwo Road</span>
            <span className="type2">VENDOR</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis <br />
              ea quis id quis ad et. Sunt qui esse
              <br /> pariatur duis deserunt mollit dolore
              <br /> cillum minim tempor enim. Elit aute <br />
              irure tempor cupidatat incididunt sint <br />
              deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit non <br />deserunt
              
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim <br />
              velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={amos} alt="Amos" className="img-amos" />
            <h3 className="name">Amos Okafor</h3>
            <span className="location">In Somolu</span>
            <span className="type2">VENDOR</span>
            <p className="testimonial">
              Aliqua id fugiat nostrud irure ex duis <br />
              ea quis id quis ad et. Sunt qui esse
              <br /> pariatur duis deserunt mollit dolore
              <br /> cillum minim tempor enim. Elit aute <br />
              irure tempor cupidatat incididunt sint <br />
              deser unt ut voluptate aute id
              <br /> deserunt nisi. Amet minim mollit
               non <br />deserunt
              
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim <br />
              velit mollit. Exercitation veniam <br />
              consequat sunt nostrud amet.
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
