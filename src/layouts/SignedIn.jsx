import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSKYIHyX3HzbdR0OuKqMdQcMlt7LdXYFK_AJx5LpyljgTwgB_4SSvKmY0wFoCyn8U4EdDNf_mfEdfEJVHc"></Image>
        <Dropdown pointing="top left" text="Huseyn">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"/>

            <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out"/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
