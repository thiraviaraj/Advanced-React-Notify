import React from "react";
import "./toaster.css";

function Toast(prop) {
  let toastClass =
    prop.type && prop.type.toLowerCase() === "success"
      ? "greenColor"
      : "redColor";
  let positionClass =
    prop.position ? prop.position.toLowerCase(): 'topcorner';
  return (
    <div className={toastClass + ' ' + positionClass}>
      {prop.text} <span className="paddingLeft10 cursorPointer"> x</span>
    </div>
  );
}

export default Toast;
