import React from 'react';

import "./coffee-button.css";

const CoffeeButton = () => {
  return (
   <div className="coffee mt-2 text-right">       
    <a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/QblPg2n">
      <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"/>
      <span className="coffee-span">Buy me a coffee</span></a>
  </div>
  );
};

export default CoffeeButton;