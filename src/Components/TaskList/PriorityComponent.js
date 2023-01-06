import React from "react";

const PriorityComponent = ({ setPriorityFilter, priority }) => {
  return (
    <div className="my-4">
      <button
        onClick={() => setPriorityFilter(null)}
        className={`px-4 py-1 mx-1 border border-sky-600 ${
          priority === null ? "bg-sky-600 text-white" : ""
        }`}
      >
        ALL
      </button>
      <button
        onClick={() => setPriorityFilter("1")}
        className={`px-4 py-1 mx-1 border border-sky-600 ${
          priority === "1" ? "bg-sky-600 text-white" : ""
        }`}
      >
        1
      </button>
      <button
        onClick={() => setPriorityFilter("2")}
        className={`px-4 py-1 mx-1 border border-sky-600 ${
          priority === "2" ? "bg-sky-600 text-white" : ""
        }`}
      >
        2
      </button>
      <button
        onClick={() => setPriorityFilter("3")}
        className={`px-4 py-1 mx-1 border border-sky-600 ${
          priority === "3" ? "bg-sky-600 text-white" : ""
        }`}
      >
        3
      </button>
    </div>
  );
};

export default PriorityComponent;
