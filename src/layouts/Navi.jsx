import React, { useState } from 'react'
import CartSummary from "./CartSummary"
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom'

export default function Navi() {
  const [isAuthenticated, setisAuthenticated] = useState(false)
  const navigate = useNavigate()
  function handleSignOut() {
    setisAuthenticated(false)
    navigate("/")
  }

  function handleSignIn() {
    setisAuthenticated(true)
  }

  
  return (
    <div >
      <Menu inverted fixed='top' >
        <Container>
          <Menu.Item
            name='home'

          />
          <Menu.Item
            name='messages'

          />

          <Menu.Menu position='right'>
            <CartSummary></CartSummary>
            { isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn} />}
            
            

          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
