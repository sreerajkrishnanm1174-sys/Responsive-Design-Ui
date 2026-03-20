import React from "react";

function NameIconbtn({className ,icon,name,onClick}) {
  return (
    <button className={`flex items-center gap-2  rounded-lg ${className}`} onClick={onClick}>
      <span>{name}</span>
      <span>{icon}</span>
    </button>
  );
}

export default NameIconbtn;
