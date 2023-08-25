import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineBarChart } from 'react-icons/ai';
import { FaMap } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="w-1/5 bg-gray-800 text-white p-4 h-screen">
      <ul>
        <li className="mb-4">
          <Link to="/" className="flex items-center">
            <AiFillHome className="mr-2" />
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/charts" className="flex items-center">
            <AiOutlineBarChart className="mr-2" />
            Charts
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/maps" className="flex items-center">
            <FaMap className="mr-2" />
            Maps
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
