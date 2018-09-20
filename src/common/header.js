import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';




class Header extends Component{
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render(){
        return(
          <div>

              <Navbar style={{ backgroundColor: 'white' }} light expand="md">
              <NavbarBrand href="/">slime대학</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />



              <Collapse isOpen={this.state.isOpen} navbar>
              <div class="input-group col-6">
                  <input type="text" class="form-control input-lg" placeholder="#관심어 또는 검색어" />
                  <Button>검색</Button>
              </div>
                <Nav className="ml-auto" navbar>

                    <NavItem>
                      <NavLink href="#">회원가입</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">로그인</NavLink>
                    </NavItem>
                </Nav>
              </Collapse>

              </Navbar>
          </div>
        );
    }

}


export default Header;
