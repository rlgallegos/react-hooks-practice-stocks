import React from "react";
import Stock from "./Stock";

function StockContainer({handleRemoveStock, handleAddStock, stocklist}) {
  const stockElements = stocklist.map(stock => {
    return <Stock onRemoveStock={handleRemoveStock} onAddStock={handleAddStock} key={stock.id} stock={stock} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockElements}
    </div>
  );
}

export default StockContainer;
