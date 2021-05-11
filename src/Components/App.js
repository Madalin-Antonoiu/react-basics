import React from "react"
import FilterableProductTable from "./Table/FilterableProductTable.js"
import {PRODUCTS} from "../PRODUCTS.js"

const App = () => {
  return <FilterableProductTable products={PRODUCTS} />
}

export default App;
