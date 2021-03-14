import React from 'react';
import styled from 'styled-components';

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
            <button onClick={cancelAction}>Cancel</button>
            <button disabled={confirmDisabled} onClick={confirmAction}>
                {confirmText}
            </button>
        </StyledConfirmFooter>
    );
}

ConfirmFooter.defaultProps = {
    confirmText: 'Confirm',
};
