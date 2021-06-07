import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink, 
} from "react-router-dom";

const SignUp = (props) => {
  return ( 
    <Fragment>
           <div className="fadeIn fast flex-1-0-auto h-100">
             <div className="container w-700 py-5 px-4 px-md-3">
                <h1 className="color-text text-center fz-35 fz-sm-45 Kanit-bold mb-4">Crea tu cuenta en Twitter</h1>
                
                <div class="row g-2">

                  <div class="col-md">
                      <div class="form-floating mb-3">
                        <input type="text" maxLength="50" className="form-control form-custom" id="nombreUsuario" placeholder="Nombre"/>
                        <label for="nombreUsuario" className="d-flex align-items-center color-input">Nombre</label>
                      </div>
                  </div>
                  <div class="col-md">
                    <div class="form-floating mb-3">
                      <input type="text" maxLength="50" className="form-control form-custom" id="apellidoUsuario" placeholder="Apellido"/>
                      <label for="apellidoUsuario" className="d-flex align-items-center color-input">Apellido</label>
                    </div>
                  </div>

                </div>
                
                <div class="form-floating mb-3">
                   <input type="email" maxLength="50" className="form-control form-custom" id="correoUsuario" placeholder="Correo"/>
                   <label for="correoUsuario" className="d-flex align-items-center color-input">Correo</label>
                </div>
                <div class="form-floating mb-3">
                   <input type="text" maxLength="50" className="form-control form-custom" id="telefonoUsuario" placeholder="Telefono"/>
                   <label for="telefonoUsuario" className="d-flex align-items-center color-input">Telefono</label>
                </div>
                <p className="color-text mb-2"><strong>Fecha de nacimiento</strong></p>
                <p className="color-text mb-4">Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.</p>


                <div class="row g-2">
                  <div class="col-md">
                    <div class="form-floating position-relative">
                         <select class="form-select form-custom" id="floatingSelectGrid" aria-label="Floating label select examplesss">
                           <option selected></option>
                           <option value="1">Enero</option>
                           <option value="2">Febrero</option>
                           <option value="3">Marzo</option>
                         </select>
                         <label for="floatingSelectGrid" className="d-flex align-items-center color-input">Mes</label>
                         <FontAwesomeIcon icon={['fas', 'angle-down']} size="lg" className="position-absolute angle-select" />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating position-relative">
                         <select class="form-select form-custom" id="floatingSelectGrid" aria-label="Floating label select example">
                           <option selected></option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                         </select>
                         <label for="floatingSelectGrid" className="d-flex align-items-center color-input">Día</label>
                         <FontAwesomeIcon icon={['fas', 'angle-down']} size="lg" className="position-absolute angle-select" />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating position-relative">
                         <select class="form-select form-custom" id="floatingSelectGrid" aria-label="Floating label select example">
                           <option selected></option>
                           <option value="1">1999</option>
                           <option value="2">2000</option>
                           <option value="3">2001</option>
                         </select>
                         <label for="floatingSelectGrid" className="d-flex align-items-center color-input">Año</label>
                         <FontAwesomeIcon icon={['fas', 'angle-down']} size="lg" className="position-absolute angle-select" />
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4">
                <Link to="/sign-up" className="btn btn-info br-radius-50 btn-color py-3 px-2 w-100 ms-auto">Siguiente</Link>
                </div>

             </div>
           </div>
    </Fragment>
   );
}
 
export default SignUp;