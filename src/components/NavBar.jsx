import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [visibleIconMenu , setVisibleIconMenu] = useState(true) 

  return (
    <>
      <Hamburger color="white"   style={{ position: 'absolute', left: 0 }} toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div>
          <nav>
            <ul className="flex flex-col items-center justify-center w-full h-max bg-red-950 fixed left-0 right-0 text-white shadow-sm shadow-white">
              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/"
                onClick={() => setOpen(false)}
              >
                <li>Home</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/main-food"
                onClick={() => setOpen(false)}
              >
                <li>Main Food</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/deserts"
                onClick={() => setOpen(false)}
              >
                <li>Deserts</li>
              </Link>

              <Link
                className="m-2 hover:border-b-2 border-white p-2 transition-all"
                to="/appetizers"
                onClick={() => setOpen(false)}
              >
                <li>Appetizers</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
