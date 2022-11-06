import { NavLink } from "react-router-dom";
import "../styles.css";

const CustomNavLink = ({ to, ...prop }) => {
  let activeStyle = {
    textDecoration: "underline",
    color: "blue",
    transition: "all 4s"
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none" }
      }
      to={to}
      end
      {...prop}
    />
  );
};

export default function Layout() {
  return (
    <>
      <nav>
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/counterOne">CounterOne</CustomNavLink>
        <CustomNavLink to="/counterTwo">CounterTwo</CustomNavLink>
        <CustomNavLink to="*">ErrorPage</CustomNavLink>
      </nav>
    </>
  );
}