import Modal from '../components/Modal';
import {useState} from 'react';
import Button from '../components/Button';

function ModalPage(){
    const [showModal, setShowModal] = useState(false);
    // by default it will be false

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
    <   div>
            <Button onClick = {handleClick} primary >
                I accept
            </Button>
        </div>
        );
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div className="relative">
            <Button onClick = {handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}

        </div>
    );
}

export default ModalPage;
