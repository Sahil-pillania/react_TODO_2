import React from "react";
import todoImg from "../images/todo.svg";

function todo() {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todoImg} alt="" />
          </figure>
        </div>
      </div>
    </>
  );
}

export default todo;
