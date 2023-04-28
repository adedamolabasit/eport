import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routesObjects from "./routes";
import { AuthProvider } from "./context/authContext";
import { PortalProvider } from "./context/portalContent";
import { useAuth } from "./context/authContext";
import { useEffect, useState } from "react";
import AuthLayout from "./pages/auth/AuthLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function App() {
  const auth = useAuth();
  const [fetchingStudent, setFetchingStudent] = useState(true);

  useEffect(() => {
    try {
      const studentObj = JSON.parse(localStorage.getItem("student"));
      if (!studentObj) {
        setFetchingStudent(false);
      } else {
        auth.initUser(studentObj);
        setFetchingStudent(false);
      }
    } catch (err) {
      setFetchingStudent(false);
    }
  }, []);

  return (
    <div className="">
      {fetchingStudent ? (
        <Router>
          <Routes>
            <Route
              path="/login"
              element={
                <AuthLayout>
                  <SignIn />
                </AuthLayout>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthLayout>
                  <SignUp />
                </AuthLayout>
              }
            />
          </Routes>
        </Router>
      ) : (
        <Router>
          <AuthProvider>
            <PortalProvider>
              <Routes>
                {routesObjects.map((route) => {
                  return (
                    <Route
                      key={route.id}
                      path={route.path}
                      element={route.element}
                    />
                  );
                })}
              </Routes>
            </PortalProvider>
          </AuthProvider>
        </Router>
      )}
    </div>
  );
}

export default App;
