import React, { useEffect, useState } from "react";
import course from "../../assets/dash/course.svg";
import person1 from "../../assets/dash/person1.svg";
import next from "../../assets/dash/nexts.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import book from "../../assets/dash/book.svg";
import line from "../../assets/dash/line.svg";
import { usePortal } from "../../context/portalContent";
import { useSelector, useDispatch } from "react-redux";

import { courseList, courseRegisteredList } from "../../store/actions/courseAction";
import { getRegisteredCourses } from "../../services/dashboardService";
import { useAuth } from "../../context/authContext";

function CourseRegistered() {
  const dispatch = useDispatch();
  const { student } = useAuth();

  const { setCourses } = usePortal();

  const [registeredCourses, setRegisteredCourses] = useState([]);

  // const dispatch = useDispatch()

  const courseLists = useSelector((state) => state?.courseList);
  const courseRegistered = useSelector((state) => state?.courseRegistered);

  const { courses } = courseLists;
  const { coursesData } = courseRegistered;
  

  console.log(courseRegistered,"gdgege")

  useEffect(() => {
    dispatch(courseList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(courseRegisteredList(student.id));
  }, [dispatch]);



  return (
    <div className="flex  justify-start gap-4 items-center h-[350px] overflow-x-auto my-[20px]">
      {courses[0]?.data.map((contents) => {
        return (
          <div className="flex flex-col w-[190px] h-[338px] items-center shadow-lg rounded-lg bg-blue-200 backdrop-filter backdrop-blur-lg">
            <div className="flex flex-col w-[190px] h-[338px] items-center shadow-inner rounded-lg bg-white backdrop-filter backdrop-blur-lg py-2">
              <div className="flex items-center pl-3">
                <h1 className="font-bold text-left text-2xl text-red-600">
                  {contents.coursecode}
                </h1>
                <img src={course} alt="" />
              </div>
              <div>
                <h4 className="flex font-bold self-left  mt-3 mb-[26px] h-[30px]  px-2">
                  {contents.name}
                </h4>
              </div>

              <p className="text-[#009CCC] text-sm  h-[40px] mt-2 mb-[28px] px-3 overflow-y-scroll break-words text-justify font-bold ">
                {contents.description}
              </p>
              <div className="flex self-start ml-4 ">
                <p className="font-bold text-sm mb-[12px] ">
                  {contents.lessons} Lessons
                </p>
              </div>
              <div className="flex  self-end mb-[17px] mr-4 border border-[#009CCC] border-2 rounded-lg px-3 py-2">
                <img src={next} alt="" className=" text-center" />
              </div>
              <img src={line} alt="" />
              <div className="w-[150px] mt-[23px] mx-[23px]">
                <ProgressBar
                  completed={(contents.lessons / 100) * 100}
                  height="10px"
                  bgColor="#009CCC"
                  labelSize="0"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CourseRegistered;
