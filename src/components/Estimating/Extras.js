import React, { useState } from 'react'
import { 
    Card,
    Row, 
    Col, 
    CardBody,
    Table,
    Button,
    Form,
    Input,
    Label
} from 'reactstrap'
import SaveContinue from '../Buttons/SaveContinue'
import SaveClear from '../Buttons/SaveClear'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'

const Extras = () => {
    const [oneTime, setOneTime ] = useState(true)
    const [ specialChg, setSpecialChg ] = useState(true)
    const toggleShowOneTime = () => {
        setOneTime(current => !current)
    }
    const toggleSpecialChg = () => {
        setSpecialChg(current => !current)
    }
  return (
    <>
        <Form>
            <Card>
                <CardBody>
                    <Row>
                        <Col className='col-6'>
                            <h5>One Time Charges</h5>
                            <Label htmlFor='oneTimeDescription'>One-Time Charge Description</Label>
                            <Input type='text' id='oneTimeDescription'/>
                            <Label htmlFor='oneTimePrice'>One-Time Charge Price</Label>
                            <Input type='number' id='oneTimePrice'/>
                            <SaveClear/>
                        </Col>
                        <Col className='col-6'>
                            <h5>Special Charges</h5>
                            <Label htmlFor='specialChargeDescription'>Special Charge Description</Label>
                            <Input type='text' id='passThroughDescription'/>
                            <Label htmlFor='passThroughPrice'>Special Charge Price</Label>
                            <Input type='number' id='passThroughPrice'/>
                            <SaveClear/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className='col-6'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>
                                            One Time Charges
                                        </th>
                                        <th>
                                            Itemize on Quote Letter?
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>

                                        </td>
                                        <td>
                                            <ToggleSwitch
                                            id='showOneTimeCharge'
                                            checked={oneTime}
                                            onChange={toggleShowOneTime}
                                            onClick={toggleShowOneTime}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col className='col-6'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>
                                            Special Charges
                                        </th>
                                        <th>
                                            Itemize on Quote Letter?
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            
                                        </td>
                                        <td>
                                            <ToggleSwitch
                                            id='showSpecialCharge'
                                            checked={specialChg}
                                            onChange={toggleSpecialChg}
                                            onClick={toggleSpecialChg}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <br/>
            <SaveContinue/>
        </Form>
    </>
  )
}

export default Extras