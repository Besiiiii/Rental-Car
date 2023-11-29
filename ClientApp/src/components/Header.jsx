import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export const Header = () => {
  return (
    <header className="head">
      <div className="logo">
        <img src="images/RentalCarLogo.png" alt="RentalCarLogo" />
      </div>
      <div className="bar">
        <ul>
          <CustomLink to="/" className="hbtn">
            <li>Home</li>
          </CustomLink>
          <CustomLink to="/catalog" className="hbtn">
            <li>Catalog</li>
          </CustomLink>
          <CustomLink to="/aboutus" className="hbtn">
            <li>About Us</li>
          </CustomLink>
          <h5>Username</h5>
        </ul>
      </div>
    </header>
  );
};
