import React from "react";
import Header from "./Header";
import Feedback from "./feedback";
import Stories from "../stories-data";

//slider-imports
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App(){

    //slider-settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };   

    return(
    <div className="main-div">

    <Header />

    <hr className="feedback-hr" />

    <h1 className="stories">Data Breach Stories</h1>

    <Slider {...settings}>
    {Stories.map(props => 
        <Feedback 
        src= {props.src} 
        heading={props.heading}
        desc_para={props.desc_para}
        span1={props.span1}
        data1={props.data1}
        span2={props.span2}
        data2={props.data2}
        span3={props.span3}
        data3={props.data3}
        span4={props.span4}
        data4={props.data4}
        />
        )}
    </Slider>
    
    <hr className="feedback-hr" />
    </div>
    )
}

export default App;