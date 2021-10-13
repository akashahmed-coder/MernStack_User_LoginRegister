import React from 'react';
import { NavLink,} from 'react-router-dom';
const Error = () => {
    return (
        <>
          <div className="errorPage">
          <div className="errorDiv">
          <div className="errorMessage">
                    <h1 className="not-found-header">we are sorry, page not found</h1>
                <p className="not-found-pera">the page you are looking for might have been removed had its name changed or temporarily unableable</p>
               </div>
                <h1 className="not-found-404">404</h1>
                 <NavLink to="/" className="p-3 btn btn-primary">
                    Back To Home
                 </NavLink>
            </div>
          </div>
        </>
    );
};

export default Error;