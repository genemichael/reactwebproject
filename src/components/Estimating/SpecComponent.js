import React, { useState, useEffect, useRef } from 'react'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'
import { Container, 
    Row, 
    Col, 
    Label,
    Input, 
    Form, 
    Button,
    Collapse,
    Card,
    CardBody,
    Table
 } from 'reactstrap'

const SpecComponent = () => {
  const [pdfProofActive, setPdfProofActive] = useState(false);
  const [hardProofActive, setHardProofActive] = useState(false);
  const [colorMatchActive, setColorMatchActive] = useState(false);
  const [variableDataActive, setVariableDataActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const pdfToggleIsTrue = () =>{
    setPdfProofActive(current => !current);
  };
  
  const hardToggleIsTrue = () =>{
    setHardProofActive(current => !current);
  };

  const colorMatchToggleIsTrue = () =>{
    setColorMatchActive(current => !current);
  };

  const variableDataToggleIsTrue = () =>{
    setVariableDataActive(current => !current);
  };

  const initialToggleValue = useRef(false);

  useEffect(() => {
    if(initialToggleValue.current) {
      initialToggleValue.current=true
      return;
    }
    
  }, [initialToggleValue])

  return (
    <Container>
      <h5>Job Components</h5>
      
      <Button outline color="info" className="btn-block" onClick={toggle}>
        Prepress
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="collapse">
            <Table bordered hover responsive>
              <thead>
                <th>PDF Proof</th>
                <th>Hard Copy Proof</th>
                <th>PMS or Color Match</th>
                <th>Variable Data</th>
                
              </thead>
              <tbody>
                <td>
                <ToggleSwitch 
                  id='pdfProof'
                  checked={pdfProofActive}
                  onClick={pdfToggleIsTrue}
                  onChange={pdfToggleIsTrue}
                />
                </td>
                <td>
                <ToggleSwitch 
                  id='hardProof'
                  checked={hardProofActive}
                  onClick={hardToggleIsTrue}
                  onChange={hardToggleIsTrue}
                />
                </td>
                <td>
                  <ToggleSwitch 
                  id='colorMatch'
                  checked={colorMatchActive}
                  onClick={colorMatchToggleIsTrue}
                  onChange={colorMatchToggleIsTrue}
                />
                </td>
                <td>
                    <ToggleSwitch
                    id='variableData'
                    checked={variableDataActive}
                    onClick={variableDataToggleIsTrue}
                    onChange={variableDataToggleIsTrue}
                    />
                </td>
                
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Collapse>
      <br />
      <Button outline color="primary" className="btn-block">
        Parts - Press & Paper
      </Button>
      <Collapse>
        <Card>
          <CardBody>
            <Collapse>
              <Button outline color="primary">
                Part 1
              </Button>
              <Card>
                <CardBody>
                  <Table hover bordered responsive>
                    <thead>
                      <th>Press</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <select id="p1press" className="form-control">
                            <option>Indigo</option>
                            <option>Versant 80</option>
                            <option>KM1250</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <th>Notes</th>
                        <th>Dimension A</th>
                        <th>Dimension B</th>
                        <th>Pages</th>
                        <th>Bleeds</th>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="text"
                            id="p1notes"
                            className="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            id="p1d1"
                            className="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            id="p1d2"
                            className="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            id="p1pp"
                            className="form-control"
                          />
                        </td>
                        <td>
                          <select id="p1bleed" className="form-control">
                            <option>True</option>
                            <option>False</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th>Paper</th>
                        <th>Paper Short Dim</th>
                        <th>Paper Long Dim</th>
                        <th>Prepress Trimming</th>
                        <th>Envelopes</th>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Collapse>
          </CardBody>
        </Card>
      </Collapse>
    </Container>
  );
};

export default SpecComponent;
