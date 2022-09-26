import React, {useState} from "react";



function Item({ name, category }) {
  const [className,setClassName] = useState('')
  const [elementText, setElementText] = useState('Add to Cart')
  
  function handleAddToCart(e){
    const newClassName = className==''? 'in-cart':'';
    setClassName(newClassName);
    const newElementText =elementText=='Add to Cart'?'Remove from Cart':'Add to Cart'
    setElementText(newElementText)
  }

  return (
    <li  className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={(e)=>handleAddToCart(e)} className='Add'>{elementText}</button>
    </li>
  );
}

export default Item;
