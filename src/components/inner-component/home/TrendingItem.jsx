import React from 'react';

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";

const TrendingItem = (props) => {
    return (
       <>
        <div className = "trending-card flex-css">
            <img src = {props.img} alt ="trending"/>
            <p className = "product-name">{props.name}</p>
            <span className = "price-tag">{props.price}</span>
            <div className = "trending-btns flex-css-column">
             <a href = "#" title = "Add to cart" className = "btn">
                 <AddShoppingCartIcon className = "icon"/>
             </a>
             <a href = "#" title = "Search All" className = "btn">
                 <SearchIcon className = "icon"/>
             </a>
            </div>
        </div>
       </>
    )
}

export default TrendingItem
