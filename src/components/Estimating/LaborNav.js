import React, {useState} from 'react'
import { Nav, NavItem, NavLink, Card, CardBody, Container, Row, Col, Collapse, Button } from 'reactstrap'
import AvailableMachines from './AvailableMachines';

const LaborNav = () => {
    const [active, setActive] = useState(1);
    
  return (
    <>
    <Row>
    <Nav
    tabs>
        <NavItem>
            <NavLink onClick={() =>setActive(1)}>
                Sheet
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={() =>setActive(2)}>
                Component Finishing
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={() =>setActive(3)}>
                Product Finishing
            </NavLink>
        </NavItem>
    </Nav>
    </Row>
    <Row>
        <Collapse isOpen={active === 1 ? true : false}>
        <Card>
          <CardBody>
            <AvailableMachines />
          </CardBody>
        </Card>
      </Collapse>
      <Collapse isOpen={active === 2 ? true : false}>
        <Card>
          <CardBody>
            <AvailableMachines />
          </CardBody>
        </Card>
      </Collapse>
      <Collapse isOpen={active === 3 ? true : false}>
        <Card>
          <CardBody>
            <AvailableMachines />
          </CardBody>
        </Card>
      </Collapse>
    </Row>
    </>
  )
}

export default LaborNav