import { useState, useContext, createContext, useEffect } from "react";
import { getCourses } from "../services/dashboardService";
import { NETWORK_STATE } from "../utils/authDefinitions";
import { useNavigate } from "react-router-dom";


const PortalContext = createContext();

export const PortalProvider = ({ children }) => {

  const navigate = useNavigate()

  const [courses, setCourses] = useState("");
  const [status, setStatus] = useState(NETWORK_STATE.IDLE);

  const [activeNav, setactiveNav] = useState("DASHBOARD");

  const handleActiveNav = (active) => {
    setactiveNav(active);
  };

  const fetchCourses = async (data) => {
    try {
      setStatus(NETWORK_STATE.LOADING);
      const cachedNetworks = localStorage.getItem("networks");
      if (cachedNetworks) {
        setCourses(JSON.parse(cachedNetworks));
        setStatus(NETWORK_STATE.SUCCESS);
      }
      setCourses(data);
      // const id = searchParams.get("selected");
      // if (id) {
      //   setSelectedNetwork(
      //     response.data.data.find((network) => network.id == id)
      //   );
      // }
      // localStorage.setItem("networks", JSON.stringify(response.data.data));
      setStatus(NETWORK_STATE.SUCCESS);
    } catch (err) {
      setStatus(NETWORK_STATE.ERROR);
      navigate("/login");
    }
  };


  return (
    <PortalContext.Provider
      value={{ activeNav, handleActiveNav,courses,fetchCourses, setStatus }}
    >
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => useContext(PortalContext);
