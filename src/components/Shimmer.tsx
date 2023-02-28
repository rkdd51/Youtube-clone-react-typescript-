import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-1">
      {Array(50)
        .fill("")
        .map((div, index) => (
          <div
            className="w-64 h-64 bg-slate-400 rounded-lg p-2 m-2 "
            key={index}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
