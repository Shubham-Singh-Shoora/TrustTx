import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, to, classprops, external }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    {external ? (
      <a href={to} target="_blank" rel="noopener noreferrer">{title}</a> // External link
    ) : (
      <Link to={to}>{title}</Link> // Internal link
    )}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { title: "BlockExplorer", to: "https://trust-tx-block-explorer.vercel.app", external: true }, // External link
    { title: "Tutorials", to: "/tutorial", external: false }, // Internal link
    { title: "Wallets", to: "/wallets", external: false }, // Internal link (inactive for now)
  ];

  return (
    <nav className="w-full flex md:justify-center justify-between items-center px-4 py-3 top-0 z-50 bg-transparent">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>

      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navItems.map((item, index) => (
          <NavBarItem
            key={item.title + index}
            title={item.title}
            to={item.to}
            external={item.external}
          />
        ))}

        {location.pathname !== "/login" && (
          <Link to="/login">
            <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] transition">
              Login
            </li>
          </Link>
        )}
      </ul>

      <div className="flex relative">
        {!toggleMenu ? (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}

        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end bg-[#0f0e13] text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navItems.map((item, index) => (
              <NavBarItem
                key={item.title + index}
                title={item.title}
                to={item.to}
                external={item.external}
                classprops="my-2 text-lg"
              />
            ))}

            {location.pathname !== "/login" && (
              <Link to="/login">
                <li className="bg-[#2952e3] mt-4 py-2 px-6 rounded-full cursor-pointer hover:bg-[#2546bd] transition">
                  Login
                </li>
              </Link>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;