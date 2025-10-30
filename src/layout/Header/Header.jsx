import React from "react";

import "./Header.scss";

function Header({ children }) {
  return <div className="header">{children}</div>;
}

export default Header;
