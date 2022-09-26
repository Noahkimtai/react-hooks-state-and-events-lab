import React, {useState} from "react";
import Item from "./Item";
//When I use the data imported from Item I get .filter is not a function in react js
function ShoppingList({ items }) {
  const [filterBy,setFilterBy]=useState('All')

  function handleFilterChange(e){
    setFilterBy(e.target.value)
  }
  const hardCodedItems = [
    { id: 1, name: "Yogurt", category: "Dairy" },
    { id: 2, name: "Pomegranate", category: "Produce" },
    { id: 3, name: "Lettuce", category: "Produce" },
    { id: 4, name: "String Cheese", category: "Dairy" },
    { id: 5, name: "Cookies", category: "Dessert" },
  ]
  const newItems = hardCodedItems.filter((item)=>{
    if(filterBy=='All'){
      return true;
    }else{
      return item.category==filterBy;
    };
  });
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>handleFilterChange(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
