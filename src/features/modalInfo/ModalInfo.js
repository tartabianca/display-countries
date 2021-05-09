import React, {forwardRef, useImperativeHandle, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalInfo.module.css';

const ModalInfo = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            close: () => close()
        }
    });

    const open = () => {
        setDisplay(true)
    };

    const close = () => {
        setDisplay(false)
    };

    if (display) {
        return ReactDOM.createPortal(
            <div className={styles.ModalWrapper}>
                <div className={styles.ModalBox}>
                    {props.children}
                </div>
            </div>, document.getElementById("root"))
    }
    return null;
});

export default ModalInfo;