import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AuthContext } from "../context/authContext";

const Navbar: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  //@ts-ignore
  const {currentUser, logout} = useContext(AuthContext)

  return (
    <div className="w-full h-16 bg-gray-950 opacity-70 flex items-center relative">
      <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="absolute top-16 left-0">
          <nav>
            <ul className="flex flex-col items-start justify-center w-full h-max bg-gray-950 opacity-70 text-white shadow-sm shadow-white">
              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/"
                onClick={() => setOpen(false)}
              >
                <li className="font-bold">Domov</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/all-recipes"
                onClick={() => setOpen(false)}
              >
                <li className="font-bold">Všechny Recepty</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/main-food"
                onClick={() => setOpen(false)}
              >
                <li className="font-bold">Hlavní Jídla</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/deserts"
                onClick={() => setOpen(false)}
              >
                <li className="font-bold">Dezerty</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/appetizers"
                onClick={() => setOpen(false)}
              >
                <li className="font-bold">Předkrmy</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
      {currentUser ? (
        <ul className="flex justify-end w-full h-max text-white ml-[-45px]">
          <li className="font-bold cursor-pointer">
            <span className="m-2 hover:border-b-2 border-white font-bold text-lg mt-[-20px] p-2 pt-0 pb-0 transition-all">{currentUser.email}</span>
          </li>
          <li className="font-bold cursor-pointer">
            <span className="m-2 hover:border-b-2 border-white font-bold text-lg mt-[-20px] p-2 pt-0 pb-0 transition-all" onClick={logout}>Odhlasit</span>
          </li>
        </ul>
      ): (  
      <ul className="flex justify-end items-center h-full w-full text-white ml-[-45px]">
        <Link
          to="/login"
          className="m-2 hover:border-b-2 border-white font-bold text-lg mt-[-20px] p-2 pt-0 pb-0 transition-all"
        >
          <li className="font-bold">Přihlásit Se</li>
        </Link>

        <Link
          to="/register"
          className="m-2 hover:border-b-2 border-white font-bold text-lg mt-[-20px] p-2 pt-0 pb-0 transition-all"
        >
          <li className="font-bold">Registrace</li>
        </Link>
      </ul>
      )}
    </div>
  );
};

export default Navbar;
