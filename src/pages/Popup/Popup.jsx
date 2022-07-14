import React from 'react';
import './Popup.css';

const Popup = () => {
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>React Extension for Auth0 API</h1>
       <button onClick={()=>{
        chrome.tabs.create({
          url: 'onboarding.html',
        });
       }}>Go to Auth0 API</button>
      </header>
    </div>
  );
};

export default Popup;
