import React from "react";
import style from "./navbar.module.css";
import ActiveLink from "./ActiveLink";
const Navbar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contactos",
      href: "/contacts",
    },
    {
      text: "referencia",
      href: "/referencia",
    },
    {
      text: "Tarea",
      href: "/tarea",
    },
  ];
  return (
    <div>
      <nav className={style.menu}>
        {menuItems.map(({ href, text }) => (
          <ActiveLink key={href} text={text} href={href} />
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
