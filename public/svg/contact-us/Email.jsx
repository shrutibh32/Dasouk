import React from "react";

const Email = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M8.16585 10.6672L13.2075 14.0282C14.9989 15.2225 17.3328 15.2225 19.1243 14.0282L24.1659 10.6672M8.16585 28.0005H24.1659C27.1114 28.0005 29.4992 25.6127 29.4992 22.6672V9.33382C29.4992 6.3883 27.1114 4.00049 24.1659 4.00049H8.16585C5.22033 4.00049 2.83252 6.3883 2.83252 9.33382V22.6672C2.83252 25.6127 5.22033 28.0005 8.16585 28.0005Z"
        stroke={color ? color : "#141718"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Email;
