import React from 'react';
import { Modal } from 'react-bootstrap';

const StatusModal = (props) => {
    const {description, title} = props.modalData;
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <h5>{title}</h5>
            </Modal.Header>

            <Modal.Body>
                <p>{description}</p>
            </Modal.Body>
        </Modal>
    );
};

export default StatusModal;