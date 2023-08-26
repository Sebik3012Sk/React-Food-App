import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul className="flex flex-row items-center w-full bg-red-950 text-white h-16 shadow-sm shadow-white">
                <Link className="m-2 hover:border-b-2 border-white p-2 transition-all" to="/">
                    <li>Home</li>
                </Link>

                <Link className="m-2 hover:border-b-2 border-white p-2 transition-all" to="/main-food">
                    <li>Main Food</li>
                </Link>

                <Link className="m-2 hover:border-b-2 border-white p-2 transition-all" to="/deserts">
                    <li>Deserts</li>
                </Link>

                <Link className="m-2 hover:border-b-2 border-white p-2 transition-all" to="/appetizers">
                    <li>Appetizers</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;