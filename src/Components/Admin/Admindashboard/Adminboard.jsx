import React from 'react';
import Adminsidebar from './Adminsidebar';

const Adminboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open  bg-white">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col p-10 w-full">
      {/* Page content here */}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">MENU</label>

      <h1 className='text-3xl justify-center text-center mb-5 font-semibold text-black'>Welcome to<span className='text-yellow-400 font-bold'> Super Admin Dashboard</span> </h1>




    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <Adminsidebar></Adminsidebar>

    </div>
  </div>
        </div>
    );
};

export default Adminboard;