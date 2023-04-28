import React, { useState } from "react";
import courseIcon1 from "../../assets/dash/courseIcon1.svg";
import person1 from "../../assets/dash/person1.svg";
import bg1 from "../../assets/background/bg1.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import book from "../../assets/dash/book.svg";
import line from "../../assets/dash/line.svg";

function CourseHistory() {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (event) => {
    setProgress(event.target.value);
  };
  return (
    <div className="self-center">
    

      <div className="flex flex-col w-[190px] h-[338px] items-center shadow-lg rounded-lg bg-blue-200 backdrop-filter backdrop-blur-lg">
        <div className="flex flex-col w-[190px] h-[338px] items-center shadow-inner rounded-lg bg-white backdrop-filter backdrop-blur-lg">
        <img
          src={courseIcon1}
          className="self-start w-[50px] h-[50px]"
          alt=""
        />
        {/* Todo: fix the free responsiveness */}
        <h4 className="font-bold self-center ml-3 mt-3 mb-[66px] ">
          Software Engineering for Service Computing
        </h4>
        <div className="flex items-center justify-evenly w-[190px] mt-2 mb-[28px] ">
          <img src={person1} alt="" />
          <p className="font-bold text-[#DFDDDD] ">Alexix Peter</p>
        </div>
        <img src={line} alt="" />
        <div className="w-[150px] mt-[23px]">
          <ProgressBar
            completed={(60 / 100) * 100}
            height="8px"
            bgColor="#2AB964"
            labelSize="6px"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default CourseHistory;

export function LinearProgress({ value }) {
  return (
    <div className="linear-progress">
      <progress value={value} max="100"></progress>
    </div>
  );
}
