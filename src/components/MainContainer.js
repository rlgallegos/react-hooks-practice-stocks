import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocklist, setStocklist] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortOption, setSortOption] =  useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => setStocklist(data))
  }, [])

  function handleAddStock(newStock) {
    setPortfolio([...portfolio, newStock])
  }

  function handleRemoveStock(newStock) {
    console.log(newStock)
    const updatedList = portfolio.filter(stock => stock.id !== newStock.id)
    setPortfolio(updatedList)
  }

  function handleFilterChange(e) {
    e.preventDefault()
    setFilter(e.target.value)
  }

  if (sortOption === 'alphabetical') {
    stocklist.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      else {
        return 0;
      }
    })
  }

  if (sortOption === 'price') {
    stocklist.sort((a, b) => a.price - b.price)
  }

  const filteredList = stocklist.filter(stock => {
    if (filter === '' || stock.type === filter){
      return true;
    } else {
      return false;
    }
  })

  return (
    <div>
      <SearchBar onFilterChange={handleFilterChange} setSortOption={setSortOption} />
      <div className="row">
        <div className="col-8">
          <StockContainer handleRemoveStock={handleRemoveStock} handleAddStock={handleAddStock} stocklist={filteredList} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
