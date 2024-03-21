import React from 'react'

const CartContext = React.createContext({
  cartList: [
    {
      title: 'Shoe',
      brand: 'Brand Name',
      id: 1001,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
      price: 760,
      quantity: 5,
    },
    {
      title: 'Laptop',
      brand: 'Brand Name',
      id: 1002,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
      price: 760,
      quantity: 2,
    },
  ],
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default CartContext
