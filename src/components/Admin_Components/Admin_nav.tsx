import React, { useState } from 'react'; // Import useState from react
import { FaBars } from 'react-icons/fa'; // For the toggle button
import logo from "../../assets/images/logo.png";
import Admin_viewComponent from './Admin_viewComponent';


const AdminNav = () => {
     
    const [View, setView] = useState(true);

    function toggleView() {
        setView(!View);
    }


  return (
    <>
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="USA Sports Logo" className="h-8 mr-4" />
        <span className="font-semibold text-xl tracking-tight">USA Sports</span>
      </div>
      <div className="hidden md:flex">
        <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={toggleView}>
          View Slots
        </button>
        <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
          View Bookings
        </button>
        <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          All Users
        </button>
      </div>
      <div className="md:hidden">
        <FaBars size={24} />
      </div>
    </nav>

    {View && <div className="view-slots">
        <Admin_viewComponent/>
    </div>}
    </>
  );
};

export default AdminNav;