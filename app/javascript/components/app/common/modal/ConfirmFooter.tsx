import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledConfirmFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function ConfirmFooter({
    cancelAction,
    confirmAction,
    confirmText,
    confirmDisabled,
}) {
    return (
        <StyledConfirmFooter>
            <Button secondary text='Cancel' onClick={cancelAction} />
            <Button
                text={confirmText}
                disabled={confirmDisabled}
                onClick={confirmAction}
            />
        </StyledConfirmFooter>
    );
}

ConfirmFooter.defaultProps = {
    confirmText: 'Confirm',
};
