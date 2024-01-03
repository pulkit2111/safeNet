import React from "react";


function Feedback(props){
    return(

         <div  className="feedback-container">
           <div className="feedback">
            <hr />
            <img src={props.src} alt="" />
            <h1>{props.heading}</h1>
            <p>{props.desc_para}</p>
            <p className="breach-details"><span>{props.span1}</span>{props.data1}
            <br />  <span>{props.span2}</span> {props.data2}
             <br /> <span>{props.span3}</span>{props.data3}
             <br /> <span>{props.span4}</span>{props.data4}</p>
            <hr />
        </div>
        </div>
    )
}

export default Feedback;