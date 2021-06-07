import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink, 
} from "react-router-dom";


const Index = (props) => {
  return (
    <Fragment>
      <div className="fadeIn fast flex-1-0-auto h-100">
        <div className="row mx-0 h-100">
          <div className="col d-none d-md-flex banner-start justify-content-center align-items-center">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="10x" className="white" />
          </div>

          <div className="col-12 col-md-8 col-lg-7 px-4 px-sm-3 d-flex flex-column justify-content-center align-itemts-center">
            <div className="py-5"> 
              <div className="d-flex">
               <FontAwesomeIcon icon={['fab', 'twitter']} size="10x" className="icon-color fz-40 mx-auto" />
              </div>
              <h1 className="color-text text-center fz-35 fz-sm-45 fz-md-65 Kanit-bold">Lo que está pasando ahora</h1>
              <p className="color-text text-center fz-25 fz-sm-30 fz-md-35 mb-5">Únete a Twitter hoy mismo.</p>
              <div className="row mx-0">
                <div className="col-sm-6 d-flex justify-content-center justify-content-sm-end mb-3 mb-sm-0">
                  <Link to="/sign-up" className="btn btn-info br-radius-50 btn-color py-sm-3 w-320">Registrate</Link>
                </div>
                <div className="col-sm-6 d-flex justify-content-center justify-content-sm-start mb-3 mb-sm-0">
                  <button className="btn btn-outline-info btn-outline-color br-radius-50 py-sm-3 w-320">Iniciar sesión</button>
                </div>
              </div>
              
            </div>
           
          </div>
        </div>
      
      </div>
    </Fragment>
    );
}
 
export default Index;