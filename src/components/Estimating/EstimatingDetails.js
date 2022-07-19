import React, { useState } from 'react'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch';
import { Container, 
    Row, 
    Col, 
    Label,
    Input, 
    Form, 
    FormGroup, 
    Alert,
    ButtonGroup,
    Button,
    ButtonToggle
 } from 'reactstrap'
 

const EstimatingDetails = () => {
    
    const [nonClickText, setNonClickText] = useState(false);
    const initialToggleValue = useRef(false);

    useEffect(() => {
      if(initialToggleValue.current) {
        initialToggleValue.current=true
        return;
      }
      
    }, [initialToggleValue])

    const nonPrintToggleIsTrue = () =>{
        setNonClickText(current => !current);
      };
  
    return (
    <Container>
    <Form>
        <h5>Job Details</h5>
        <p>For a new estimate, fill in details and click Get a Quote Number</p>
        <p>To load an estimate, fill in the Estimate Number and click Load</p>
        <Row>
            <Col>
                <Label htmlFor='estNumber'>Estimate Number</Label>
                <Input
                    type='text'
                    name='estNumber'
                    id='estNumber'
                    disabled>
                </Input>
            </Col>
        </Row>
        <Row>
            <Col>
                <Label htmlFor='cust'>
                    Customer
                </Label>
                <Input
                type='text'
                name='cust'
                id='cust'
                >
                </Input>
                <Label htmlFor='desc'>
                    Job Title
                </Label>
                <Input
                type='text'
                name='desc'
                id='desc'
                >
                </Input>
            </Col>
            <Col>
                <Label htmlFor='pm'>
                    Project Manager
                </Label>
                <Input
                type='select'
                id='pm'
                name='pm'
                className='form-control'
                >
                    <option></option>
                    <option>Merle May Lestrange Lauria Lenssen</option>
                </Input>
                <Label 
                htmlFor='rep'>
                Sales Rep
                </Label>
                <Input
                type='select'
                id='rep'
                name='rep'
                className='form-control'
                >
                    <option></option>
                <option>Berta Caseres</option>
                </Input>
                
            </Col>
            <Col>
                <Label htmlFor='type'>
                    Job Type
                </Label>
                <Input
                type='select'
                name='type'
                id='type'
                className='form-control'>
                    <option></option>
                    <option>New Job</option>
                    <option>ERP</option>
                    <option>Reprint w/Changes</option>
                </Input>
                <Label htmlFor='prev'>
                    Previous Job
                </Label>
                <Input
                type='text'
                name='prev'
                id='prev'
                className='form-control'>

                </Input>
            </Col>
        </Row>
        <Row>
            <Col>
                <Label
                htmlFor='non_print'>
                    Non-printing item?
                </Label>
                <Button
                type='checkbox'
                id='non-print'
                onClick={() => {
                    if(nonClickText=="False"){
                        setNonClickText("True")
                    } else {
                        setNonClickText("False")
                    }
                }}
                >
                <>
                {nonClickText}
                </>
                </Button>
            </Col>
        </Row>
        <Row className='justify-content-end'>
        <ButtonGroup>
            <Button 
                outline
                color='info'
                id='loadButton'
                >Get a Quote Number
            </Button>
            <Button
                outline
                color='secondary'
                id='openButton'
                >
                    Load
                </Button>
            <Button
            color='danger'
            id='clearButton'>Clear</Button>
        </ButtonGroup>
        </Row>
    </Form>
    </Container>
    
  )
}

export default EstimatingDetails