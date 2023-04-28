import React, { useEffect } from "react";
import Sidebar from "../../components/dashboardComponents/Sidebar";
import Navbar from "../../components/dashboardComponents/Navbar";
import { usePortal } from "../../context/portalContent";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

function DashboardLayout({ children }) {
  const { student } = useAuth();
  const navigate = useNavigate()

  return (
    student ? (
      <div className="w-screen h-screen overflow-hidden pb-6">
        <div className="flex">
          <Sidebar />
          <div>
            <Navbar />
            <div className="flex flex-col gap-8 w-full h-screen py-8 px-8">
              <div className="flex  gap-8 w-full">
                <div className="w-[750px] h-[400px] bg-[#006E90]   px-[35px] rounded-lg ">
                  {children}
                </div>
                <div className="w-[270px] h-[400px] bg-[#D9D9D9] opacity-50 blur-xs shadow-inner shadow-lg  rounded-lg animate-pulse"></div>
              </div>
              <div className=" flex justify-between">
                <div className="w-[273px] h-[200px] bg-[#D9D9D9] rounded-lg animate-pulse"></div>
                <div className="w-[273px] h-[200px] bg-[#D9D9D9] rounded-lg animate-pulse"></div>
                <div className="w-[428px] h-[200px] bg-[#D9D9D9] rounded-lg animate-pulse"></div>
              </div>
            </div>
            <div className="w-[750px] h-[400px] bg-[#006E90]   px-[35px] rounded-lg ">
              {children}
            </div>
          </div>
        </div>
      </div>
    ) : (
      navigate('/login')
    )
  );
}

export default DashboardLayout;