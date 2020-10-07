import React from "react";
import "./toaster.css";

function Toast(prop) {
  let toastClass = prop.type && prop.type.toLowerCase() === "success" ? "greenColor" : "redColor";
  let positionClass = prop.position ? prop.position.toLowerCase() : 'topcorner';
  return /*#__PURE__*/React.createElement("div", {
    className: toastClass + ' ' + positionClass
  }, prop.text, " ", /*#__PURE__*/React.createElement("span", {
    className: "paddingLeft10 cursorPointer"
  }, " x"));
}

export default Toast;