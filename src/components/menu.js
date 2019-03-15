import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => (
  <React.Fragment>
    <Link to="/table">Table</Link>
    <Link to="/chart">Chart</Link>
  </React.Fragment>
);

export default Menu;