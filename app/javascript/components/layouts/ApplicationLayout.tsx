import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const ApplicationLayout = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return <BrowserRouter>{children}</BrowserRouter>;
};

export default ApplicationLayout;
