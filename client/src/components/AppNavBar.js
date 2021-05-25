import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const AppNavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} Navbar>
                <Nav className="ml-auto" Navbar>
                    <NavItem>
                        <NavLink href="https://google.com">Google</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavBar;