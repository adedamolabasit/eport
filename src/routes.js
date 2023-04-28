import CourseHistory from "./pages/dashboard/CourseHistory";
import Courses from "./pages/dashboard/Courses";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Home from "./pages/dashboard/Home";
import CourseRegistered from "./pages/dashboard/CourseRegistered";
import GraduationEligibility from "./pages/dashboard/GraduationEligibility";
import AuthLayout from "./pages/auth/AuthLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

const routesObjects = [

  {
    id: 2,
    path: "/dashboard/courses",
    element: (
      <DashboardLayout>
        <Courses />
      </DashboardLayout>
    ),
  },


  {
    id: 4,
    path: "/",
    element: (
      <DashboardLayout>
        <CourseRegistered />
      </DashboardLayout>
    ),
  },
  {
    id: 5,
    path: "/dashboard/eligibility",
    element: (
      <DashboardLayout>
        <GraduationEligibility />
      </DashboardLayout>
    ),
  },
  {
    id: 6,
    path: "/login",
    element: (
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    ),
  },
  {
    id: 7,
    path: "/signup",
    element: (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
  },
];

export default routesObjects;
