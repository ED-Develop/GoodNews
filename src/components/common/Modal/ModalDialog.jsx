import React from "react";
import {Button, Modal} from "react-bootstrap";

const ModalDialog = ({isShow, title, body, closeModal, updateProfile}) => {
    const handleClose = () => {
        closeModal();
    };

    const handleSave = () => {
        updateProfile();
    };

    return (
        <>
            <Modal show={isShow} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" className='red-background' onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default ModalDialog;