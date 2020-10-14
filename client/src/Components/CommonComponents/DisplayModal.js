import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const displayModal = (props) => {
  const handleClose = () => {
    console.log("in close")
    props.setData();
  }
  return (
    <Modal show={true} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Ok
      </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default displayModal;
