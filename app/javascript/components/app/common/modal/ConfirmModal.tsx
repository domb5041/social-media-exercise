import React from 'react';
import Modal from './Modal';
import ConfirmFooter from './ConfirmFooter';

export default function ConfirmModal({
    showWhen,
    close,
    title,
    confirmAction,
    confirmText,
    bodyText,
}) {
    return (
        <Modal
            showWhen={showWhen}
            close={close}
            title={title}
            size='small'
            footerElements={
                <ConfirmFooter
                    confirmAction={confirmAction}
                    confirmText={confirmText}
                    confirmDisabled={false}
                    cancelAction={close}
                />
            }
        >
            <p>{bodyText}</p>
        </Modal>
    );
}

ConfirmModal.defaultProps = {
    bodyText: 'Are you sure?',
};
