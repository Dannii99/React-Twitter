import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false );

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (!checked) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };
  
  return ( 
    <Fragment>
      <div className="d-flex justify-content-center">
        <label className="toggle mt-3">
          <input type="checkbox" className="toggle__input" id="uniqueID" defaultChecked={checked} onChange={() => toggleThemeChange()} />
          <span className="toggle-track">
            <span className="toggle-indicator">
              <span className="checkMark d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={['fas', ((checked && 'moon') || 'sun')]} className="check-icon" />
              </span>
            </span>
          </span>
        </label>
      </div>
    </Fragment>
   );
}
 
export default Header;