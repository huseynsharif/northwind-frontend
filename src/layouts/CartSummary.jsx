import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Container, Dropdown, DropdownDivider, Label, Menu } from 'semantic-ui-react'

export default function CartSummary() {

const {cartItems} = useSelector(state => state.cart)

  return (
    <div><Dropdown item text='Sepetiniz'>
    <Dropdown.Menu>
      {
        cartItems.map((cartItem)=>
          <Dropdown.Item>{cartItem.product.productName}
            <Label>{cartItem.quantity}</Label>
          </Dropdown.Item>
        )
      }
      
      <Dropdown.Divider/>
      <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
      
    </Dropdown.Menu>
  </Dropdown></div>
  )
}
