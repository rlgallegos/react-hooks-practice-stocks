import React, {useState} from "react";


function Stock({onRemoveStock, onAddStock, stock}) {
  const [isInPortfolio, setIsInPortfolio] = useState(false)

  function handleClick() {
    if (isInPortfolio) {
      onRemoveStock(stock)
      setIsInPortfolio(false)  
    } else {
      onAddStock(stock)
      setIsInPortfolio(true)   
    }
  }

  return (
    <div>
      <div onClick={handleClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
