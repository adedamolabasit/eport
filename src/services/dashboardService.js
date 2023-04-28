import axios from "../axios"




export const registerCourses = (data) => {
  return axios.post("http://localhost:8000/dashboard/register",data);
};
export const getRegisteredCourses = (studentId) => {
  return axios.get(`http://localhost:8000/dashboard/courses/:${studentId}`);
};

