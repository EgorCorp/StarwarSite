import React from 'react'
import './modal.css'
import Modal from 'react-bootstrap/Modal'

const ModalDialog = ({show, handleClose, title, body}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <button className="btnClose" variant="secondary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  )
}
export default ModalDialog
