import React from 'react';
import { Button, Form, Row, Col } from "react-bootstrap";

import '../../styles/Patient/AddPatient.css';

const AddPatient = () => {
  return (
    <div className='newPatienForm'>
      <Form>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Name
          </Form.Label>
          <Col md="8">
            <Form.Control type="text" placeholder="Enter Name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column md="4">
            Email
      </Form.Label>
          <Col md="8">
            <Form.Control type="email" placeholder="Enter Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Address
      </Form.Label>
          <Col md="8">
            <Form.Control as="textarea" rows="2" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formGridCity">
          <Form.Label column md="4">
            Age
      </Form.Label>
          <Col md="8">
            <Form.Control />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formGridState">
          <Form.Label column md="4">
            Gender
      </Form.Label>
          <Col md="8">
            <Form.Control as="select">
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Past Dental History
      </Form.Label>
          <Col md="8">
            <Form.Control as="textarea" rows="2" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Cheif Compaint
      </Form.Label>
          <Col md="8">
            <Form.Control as="textarea" rows="1" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Previous Dignosis
      </Form.Label>
          <Col sm="10">
            <Form.Control as="textarea" rows="2" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Provisional treatment plan
      </Form.Label>
          <Col sm="10">
            <Form.Control as="textarea" rows="2" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Occupation
      </Form.Label>
          <Col sm="10">
            <Form.Control as="select">
              <option>Choose...</option>
              <option>Student</option>
              <option>Service</option>
              <option>Doctor</option>
              <option>Business</option>
              <option>House Wife</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Cancel
    </Button>
        <Button variant="primary" type="submit">
          Save
    </Button>
      </Form>
    </div>
  );
}

export default AddPatient;