import React from "react";

function Card(props){
    // console.log(props);
    return(
      <>
     
       
      <div className="card">
        <img src={props.srcimg} alt="mypic" className="card__img"></img>
        <p className="card__catogary">{props.catogary}</p>
        <h3 className="card__title">{props.title}</h3>
        <a href={props.link} target="_blank">
          <button className="button">Watch Now</button>
        </a>
  
      </div>
    
    
    </>
    )
  }

  export default Card;