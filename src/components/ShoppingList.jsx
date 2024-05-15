import React from 'react';
const products=[
    {name:"paper",isFruit:false,id:1},
    {name:"pen",isFruit:false,id:2},
    {name:"apple",isFruit: true,id:3}
]

const ShoppingList = () => {
    const listItems = products.map(product =>

        <li key={product.id} style={{color: product.isFruit? 'magenta' : 'darkgreen'}}>
            {product.name}
        </li>
    )
    return (
        <ul>
            {listItems}
        </ul>
    );
};

export default ShoppingList;