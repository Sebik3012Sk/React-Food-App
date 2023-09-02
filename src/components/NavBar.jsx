import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger color="white" style={{ position: 'absolute', left: 0 }} toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div>
          <nav>
            <ul className="flex flex-col items-start justify-center w-full h-max bg-gray-950 opacity-70 fixed left-0 right-0 text-white shadow-sm shadow-white">
              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/"
                onClick={() => setOpen(false)}
              >
                <li>Domov</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/all-recipes"
                onClick={() => setOpen(false)}
              >
                <li>Všechny Recepty</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/main-food"
                onClick={() => setOpen(false)}
              >
                <li>Hlavní Jídla</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/deserts"
                onClick={() => setOpen(false)}
              >
                <li>Dezerty</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/appetizers"
                onClick={() => setOpen(false)}
              >
                <li>Předkrmy</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}

            <ul className="flex justify-end w-full h-max text-black ml-[-45px]">
              <Link to="/login" className="m-2 hover:border-b-2 border-black font-bold text-lg mt-[-20px] p-2 pt-0 pb-0 transition-all">
                <li>Přihlásit Se</li>
              </Link>

              <Link to="/register" className="m-2 hover:border-b-2 border-black font-bold text-lg mt-[-20px] p-2 pt-0 pb-0 transition-all">
                <li>Registrace</li>
              </Link>
            </ul>
    </>
  );
}

export default Navbar;