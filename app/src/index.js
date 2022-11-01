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
import Card from "./Cards"

ReactDOM.render( 
  <>
  <Card srcimg="https://wallpaperaccess.com/full/1510470.jpg"
   catogary="A Netflix original series"
  title ="DARK"
   link="https://www.netflix.com/search?q=dark" />,
  <Card srcimg="https://images.alphacoders.com/107/1072652.jpg"
   catogary="A Netflix original series"
  title ="Money Heist"
   link="https://www.netflix.com/watch/80205342?trackId=255824129"/>,
  <Card srcimg="https://wallpaperaccess.com/full/2614762.jpg"
   catogary="A Netflix original series"
  title ="Locke and Key"
   link="https://www.netflix.com/watch/80244954?trackId=255824129"/>,
  </>,

   document.getElementById('root'),
)
