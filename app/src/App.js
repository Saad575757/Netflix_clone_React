
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";

const Card = () =>{
  return(
    <div className="UI-card">
      <div className="content">Identity Card</div>
      <div className="extra-content">
        <div className="UI-two-buttons"></div>
        <div className="UI basic green button">Approved</div>
        <div className="UI basic red button">Reject</div>
      </div>
    </div>
  )
}

export default Card;