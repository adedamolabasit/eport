import React,{useEffect} from "react";
import courseData from "../../data/coursesdata";
import CourseCard from "../../components/CourseCard";
import { usePortal } from "../../context/portalContent";
import { useSelector, useDispatch } from "react-redux";

import { courseList } from "../../store/actions/courseAction";
function Courses() {

  // const check = Object.keys(courses).map(keys => {
  //   return(courses)
  // })
  // console.log(check,"jfhfh")
  // console.log(courses)
  const dispatch = useDispatch();
  const { setCourses } = usePortal();

  // const dispatch = useDispatch()

  const courseLists = useSelector((state) => state?.courseList);

  const { courses } = courseLists;

  useEffect(() => {
    dispatch(courseList());
  }, [dispatch]);

  return (
    <div className=" ] my-[20px] flex flex-col gap-[30px]  overflow-y-auto h-[350px] ">
      {courses[0]?.data.map((course) => {
        return (
          <CourseCard
            code={course.coursecode}
            title={course.name}
            lessons={course.lessons}
            price={course.fee}
            id={course.id}
          />
        );
      })}
    </div>
  );
}

export default Courses;
