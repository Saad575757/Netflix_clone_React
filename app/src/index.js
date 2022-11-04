// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';




// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);




// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import  ReactDOM  from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from './Sdata';
 
// console.log(Sdata);

function nCard(val){
  return(
    <Card  srcimg={val.srcimg}
   catogary={val.catogary}
  title ={val.title}
   link={val.link}
    />
  );

}
ReactDOM.render( 
  <>
  <h1 className="heading"><b><strong>Top 5 Netflix Series in 2022</strong></b></h1>
  <div className="con">
    
  
    {Sdata.map(nCard)}
    </div>
  </>,

   document.getElementById('root'),
)
