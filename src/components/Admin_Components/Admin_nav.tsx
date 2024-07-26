import React, { useState } from 'react'; // Import useState from react
import logo from "../../assets/images/logo.png";
import Admin_viewComponent from './Admin_viewComponent';
import AdminAllUsers from './Admin_AllUsers';
import AdminAllBookings from './AllBookings';

const AdminNav = () => {
  const [view, setView] = useState(true);
  const [allUsers, setAllUsers] = useState(false);
  const [viewBookings, setViewBookings] = useState(false);

  function toggleView() {
    setView(!view);
    setAllUsers(false);
  }

  function viewUsers() {
    setAllUsers(true);
    setView(false);
  }
  function viewBooking() {
    setAllUsers(false);
    setView(false);
    setViewBookings(true);
  }

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="USA Sports Logo" className="h-8 mr-4" />
          <span className="font-semibold text-xl tracking-tight">USA Sports</span>
        </div>
        <div className="flex space-x-2">
          <button
            className={`${
              view ? 'bg-gray-700' : 'bg-gray-900'
            } hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out`}
            onClick={toggleView}
          >
            View Slots
          </button>
          <button
            className={`${
              viewBookings ? 'bg-gray-700' : 'bg-gray-900'
            } hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out`}
            onClick={viewBooking}
          >
            View Bookings
          </button>
          <button
            className={`${
              allUsers ? 'bg-gray-700' : 'bg-gray-900'
            } hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out`}
            onClick={viewUsers}
          >
            All Users
          </button>
        </div>
      </nav>

      {view && (
        <div className="view-slots">
          <Admin_viewComponent />
        </div>
      )}
      {allUsers && (
        <div className="viewAllUsers">
          <AdminAllUsers />
        </div>
      )}
      {viewBookings && (
        <div className="viewBookings">
          <AdminAllBookings />
        </div>
      )}
    </>
  );
};

export default AdminNav;
