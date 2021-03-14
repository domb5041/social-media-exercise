import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const ApplicationLayout = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </BrowserRouter>
    );
};

export default ApplicationLayout;
