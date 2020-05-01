import React from "react";
import {Button, Modal} from "react-bootstrap";
import {FormattedMessage} from "react-intl";

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
                    <Modal.Title><FormattedMessage id={title}/></Modal.Title>
                </Modal.Header>
                <Modal.Body><FormattedMessage id={body}/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <FormattedMessage id='modal.cancel'/>
                    </Button>
                    <Button variant="danger" className='red-background' onClick={handleSave}>
                        <FormattedMessage id='modal.save'/>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default ModalDialog;
