import React from "react";

const ApplicationLayout = (props: { children: React.ReactNode; }) => {
  const { children } = props;

  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
          </div>
        </nav>
      </header>

      {children}
    </React.Fragment>
  );
};

export default ApplicationLayout;
