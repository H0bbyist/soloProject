import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return(
            <div>
                <Nav
          bsStyle="tabs"
          justified
          activeKey={1}
          onSelect={key => this.handleSelect(key)}
        >
          <NavItem eventKey={1} href="/home">
            NavItem 1 content
          </NavItem>
          <NavItem eventKey={2} title="Item">
            NavItem 2 content
          </NavItem>
          <NavItem eventKey={3} disabled>
            NavItem 3 content
          </NavItem>
        </Nav>
            </div>
        )
    }
}

export default Navigation