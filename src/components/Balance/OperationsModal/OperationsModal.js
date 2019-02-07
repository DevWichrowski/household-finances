import React, {Component} from 'react';
import './OperationsModal.scss';
import {Modal} from "antd";
class OperationsModal extends Component {
    render() {

        return (
            <div className="OperationsMenu">
                <Modal
                    title="Operacje"
                    visible={this.props.visible}
                    onCancel={this.props.onCancel}
                    footer={null}
                >
                    <div className="modal-option">Dodaj kwote</div>
                    <div className="modal-option">Wypłać kwote</div>
                    <div  className="modal-option">Przelej na cel</div>
                </Modal>
            </div>
        );
    }
}

export default OperationsModal;