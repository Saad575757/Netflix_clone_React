import React from "react";

function Card(props){
    console.log(props);
    return(
      <>
    <div className="cards">
      <div className="card">
        <img src={props.srcimg} alt="mypic" className="card__img"></img>
        <span className="card__catogary">{props.catogary}</span>
        <h3 className="card__title">{props.title}</h3>
        <a href={props.link} target="_blank">
          <button>Watch Now</button>
        </a>
  
      </div>
  
    </div>
    
    </>
    )
  }

  export default Card;