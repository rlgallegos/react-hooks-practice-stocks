import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio}) {

  const portfolioList = portfolio.map(eachStock => {
    return <Stock key={eachStock.id} stock={eachStock} />
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioList
      }
    </div>
  );
}

export default PortfolioContainer;
