import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const ApplicationLayout = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <BrowserRouter>
            {/* <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
          </div>
        </nav>
      </header> */}

            {children}
        </BrowserRouter>
    );
};

export default ApplicationLayout;
