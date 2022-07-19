import React, { useState } from 'react'
import { 
    Container, 
    Row,
    RowProps,
    Col,
    ColProps,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button,
    ButtonGroup,
    Input
 } from 'reactstrap'

const EstimatingStartScreen = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(prevState => !prevState)
  return (
    <Container>
    <p></p>
    <p></p>
    <Row className='justify-content-center'>
        <Col className='col-md-6'>
            Hi, User!
        
        
            <Input
            type='select'
            id='productGroup'
            className='form-control'>
                <option>What are we making today?</option>
                <option>Digital Print</option>
                <option>Litho Print</option>
                <option>Screen Printed Textile</option>
                <option>Screen/Letterpress Flatstock</option>
                <option>Non-print</option>

            </Input>
            </Col>
            
    </Row>
    <Row className='justify-content-end'>

        <ButtonGroup className='btn-group'>
            <Button 
                outline
                color='primary'
                id='saveButton'
                >Save & Continue
            </Button>
            
            <Button
            color='danger'
            id='clearButton'>Clear</Button>
        </ButtonGroup>
        </Row>
    </Container>
  )
}

export default EstimatingStartScreen