import React from 'react';
import ReactDOM from 'react-dom';
import Toast from './toast/toaster';
import './notify/notify.css';
/* Render React component */

function showToast(text, type, timeout, position) {
  let target = document.getElementById("notification-wrapper");
  setTimeout(() => {
    hide();
  }, timeout ? timeout : 2500);
  ReactDOM.render( /*#__PURE__*/React.createElement(Toast, {
    text: text,
    timeout: timeout,
    type: type,
    position: position
  }), target);
}
/* Unmount React component */


function hide() {
  let target = document.getElementById("notification-wrapper");
  ReactDOM.unmountComponentAtNode(target);
}

const Notifications = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "notification-wrapper",
    className: "card"
  });
};

export { showToast };
export default Notifications;